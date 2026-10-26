// Contact form enhancement. The form works without this script (POST + 303 redirect).
// Adds: timestamp, error summary from ?error=..., native-validation summary, fetch submit.
interface Messages {
  summary: string;
  name_required: string;
  email_required: string;
  email_invalid: string;
  idea_required: string;
  idea_too_short: string;
  idea_too_long: string;
  language_required: string;
  success_title: string;
  success_body: string;
  failure_title: string;
  failure_body: string;
  rate_limited: string;
  submitting: string;
  submit: string;
}

const form = document.querySelector<HTMLFormElement>('#form');
const summary = document.querySelector<HTMLElement>('#form-errors');
const live = document.querySelector<HTMLElement>('#form-status');

if (form && summary && live) {
  const m = JSON.parse(form.dataset['messages'] ?? '{}') as Messages;
  const FIELDS = ['name', 'email', 'idea', 'lang'] as const;
  type Field = (typeof FIELDS)[number];
  const inputFor = (f: Field): HTMLElement | null =>
    f === 'lang'
      ? form.querySelector<HTMLElement>('input[name="lang"]')
      : form.querySelector<HTMLElement>(`[name="${f}"]`);
  const errEl = (f: Field) => form.querySelector<HTMLElement>(`#err-${f}`);

  const stamp = form.querySelector<HTMLInputElement>('input[name="ts"]');
  if (stamp) stamp.value = String(Math.floor(Date.now() / 1000));

  const clear = () => {
    summary.hidden = true;
    summary.replaceChildren();
    summary.classList.remove('status--ok', 'status--info');
    for (const f of FIELDS) {
      const e = errEl(f);
      if (e) e.replaceChildren();
      inputFor(f)?.removeAttribute('aria-invalid');
    }
  };

  const show = (title: string, body?: string, items: { f: Field; msg: string }[] = []) => {
    summary.replaceChildren();
    const h = document.createElement('h2');
    h.tabIndex = -1;
    h.textContent = title;
    summary.append(h);
    if (body) {
      const p = document.createElement('p');
      p.textContent = body;
      summary.append(p);
    }
    if (items.length) {
      const ul = document.createElement('ul');
      for (const it of items) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const target = inputFor(it.f);
        a.href = `#${target?.id ?? ''}`;
        a.textContent = it.msg;
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
          target?.focus();
        });
        li.append(a);
        ul.append(li);
        const e = errEl(it.f);
        if (e) e.textContent = it.msg;
        if (target) target.setAttribute('aria-invalid', 'true');
      }
      summary.append(ul);
    }
    summary.hidden = false;
    const focusHeading = () => window.setTimeout(() => h.focus(), 50);
    if (document.readyState === 'complete') focusHeading();
    else window.addEventListener('load', focusHeading, { once: true });
    summary.scrollIntoView({ block: 'nearest' });
  };

  const messageFor = (f: Field, el: HTMLInputElement | HTMLTextAreaElement | null): string => {
    const v = el?.value.trim() ?? '';
    if (f === 'name') return m.name_required;
    if (f === 'lang') return m.language_required;
    if (f === 'email') return v ? m.email_invalid : m.email_required;
    if (!v) return m.idea_required;
    return v.length < Number(form.dataset['min']) ? m.idea_too_short : m.idea_too_long;
  };

  const invalidFields = (): Field[] =>
    FIELDS.filter((f) => {
      if (f === 'lang') return !form.querySelector('input[name="lang"]:checked');
      const el = inputFor(f) as HTMLInputElement | HTMLTextAreaElement | null;
      return !!el && !el.checkValidity();
    });

  const showFieldErrors = (fields: Field[]) =>
    show(
      m.summary,
      undefined,
      fields.map((f) => ({
        f,
        msg: messageFor(f, inputFor(f) as HTMLInputElement | HTMLTextAreaElement | null),
      })),
    );

  // 1. Redirect back from the server: /contact/?error=<code>&fields=a,b#form
  const params = new URLSearchParams(window.location.search);
  const code = params.get('error');
  if (code) {
    const bad = (params.get('fields') ?? '')
      .split(',')
      .filter((x): x is Field => (FIELDS as readonly string[]).includes(x));
    if (code === 'validation' && bad.length) showFieldErrors(bad);
    else if (code === 'validation') show(m.summary);
    else if (code === 'rate') show(m.failure_title, m.rate_limited);
    else show(m.failure_title, m.failure_body);
  }

  // 2. Progressive enhancement: inline validation + fetch.
  form.noValidate = true;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  let busy = false;
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (busy) return;
    clear();
    const bad = invalidFields();
    if (bad.length) {
      showFieldErrors(bad);
      return;
    }
    busy = true;
    if (button) {
      button.setAttribute('aria-disabled', 'true');
      button.textContent = m.submitting;
    }
    live.textContent = m.submitting;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: string[];
      };
      if (res.ok && data.ok) {
        form.reset();
        summary.classList.add('status--ok');
        show(m.success_title, m.success_body);
        return;
      }
      if (data.error === 'validation' && data.fields?.length) {
        showFieldErrors(
          data.fields.filter((x): x is Field => (FIELDS as readonly string[]).includes(x)),
        );
      } else if (data.error === 'rate') show(m.failure_title, m.rate_limited);
      else show(m.failure_title, m.failure_body);
    } catch {
      show(m.failure_title, m.failure_body);
    } finally {
      busy = false;
      live.textContent = '';
      if (button) {
        button.removeAttribute('aria-disabled');
        button.textContent = m.submit;
      }
    }
  });
}
