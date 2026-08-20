/**
 * Contact form submission.
 *
 * Progressive enhancement: without JavaScript the form posts normally and the
 * provider shows its own confirmation page. With JavaScript it posts in the
 * background so the visitor never leaves the page.
 *
 * Field validation is left to the browser (`required`, `type="email"`), which
 * already reports errors in the visitor's own language.
 */

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form?.action) return;

  const button = form.querySelector<HTMLButtonElement>('[data-submit]');
  const status = form.querySelector<HTMLElement>('[data-status]');
  const label = button?.querySelector<HTMLElement>('[data-submit-label]');
  if (!button || !status || !label) return;

  const idleText = label.textContent ?? '';
  const { submitting, success, error } = form.dataset;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    button.disabled = true;
    label.textContent = submitting ?? idleText;
    status.textContent = '';
    delete status.dataset.state;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      status.textContent = success ?? '';
      status.dataset.state = 'success';
    } catch {
      status.textContent = error ?? '';
      status.dataset.state = 'error';
    } finally {
      button.disabled = false;
      label.textContent = idleText;
    }
  });
}
