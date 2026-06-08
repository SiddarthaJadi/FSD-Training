// Lightweight client-side behaviors: course details modal, registration submission alert.

(function () {
  // Modal population for "View Details"
  const detailsModalEl = document.getElementById('courseDetailsModal');
  if (detailsModalEl) {
    detailsModalEl.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget;
      if (!button) return;

      const name = button.getAttribute('data-course-name') || '';
      const duration = button.getAttribute('data-course-duration') || '';
      const fee = button.getAttribute('data-course-fee') || '';
      const desc = button.getAttribute('data-course-desc') || '';

      const modalTitle = detailsModalEl.querySelector('#courseDetailsModalLabel');
      const modalBody = detailsModalEl.querySelector('#courseDetailsModalBody');

      if (modalTitle) modalTitle.textContent = name;
      if (modalBody) {
        modalBody.innerHTML = `
          <p class="mb-2">${escapeHtml(desc)}</p>
          <div class="row g-2">
            <div class="col-md-6"><strong>Duration:</strong> ${escapeHtml(duration)}</div>
            <div class="col-md-6"><strong>Fee:</strong> ${escapeHtml(fee)}</div>
          </div>
        `;
      }
    });
  }

  // Registration form success alert
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const alertHost = document.getElementById('registrationAlert');
      if (alertHost) {
        alertHost.classList.remove('d-none');
      }

      // Optionally reset form
      regForm.reset();
      // Focus for accessibility
      if (alertHost) alertHost.focus?.();
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;');
  }
})();

