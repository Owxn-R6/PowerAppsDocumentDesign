document.addEventListener('DOMContentLoaded', () => {
  const isPreview = document.body.classList.contains('preview');
  const previewFields = document.querySelectorAll('[data-preview]');

  previewFields.forEach((field) => {
    const text = field.textContent.trim();
    const hasPlaceholder = /\{\{.*\}\}/.test(text);
    const hasValue = text !== '' && !hasPlaceholder;

    if (isPreview && !hasValue) {
      field.textContent = field.dataset.preview;
      field.classList.add('preview-active');
    }
  });
});
