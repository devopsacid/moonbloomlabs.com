// Tiny enhancement: close the mobile menu / language menu with Escape or an outside click.
const menus = Array.from(
  document.querySelectorAll<HTMLDetailsElement>('details[data-menu], details.lang-menu'),
);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  for (const m of menus) {
    if (m.open) {
      m.open = false;
      m.querySelector('summary')?.focus();
    }
  }
});
document.addEventListener('click', (e) => {
  const target = e.target as Node;
  for (const m of menus) {
    if (m.open && !m.contains(target)) m.open = false;
  }
});
for (const m of menus) {
  m.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) m.open = false;
  });
}
