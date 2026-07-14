// HomeCure Healthcare - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // ENQUIRE SIDE-PANEL - Inject HTML
  // =============================================
  const enquireHTML = `
  <div id="enquireOverlay" class="enquire-overlay">
    <div class="enquire-panel" role="dialog" aria-labelledby="enquireTitle">
      <!-- Green Header -->
      <div class="enquire-panel-header">
        <button class="enquire-close" id="enquireClose" aria-label="Close">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="enquire-badge">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Quick Response
        </div>
        <div class="enquire-header-title" id="enquireTitle">Get a Free Callback</div>
        <div class="enquire-header-sub">Share your details — we'll call back in under 30 minutes!</div>
      </div>

      <!-- Body -->
      <div class="enquire-panel-body">

        <!-- Success State -->
        <div class="enquire-success" id="enquireSuccess">
          <div class="enquire-success-icon">
            <svg width="36" height="36" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>Enquiry Received!</h3>
          <p>Our team will call you back within <strong>30 minutes</strong>.</p>
          <p class="eq-ref" id="enquireRef"></p>
          <button class="enquire-submit-btn" id="enquireDoneBtn" style="margin-top:8px;">Close</button>
        </div>

        <!-- Form -->
        <div id="enquireFormWrap">
          <!-- Quick Contact -->
          <div class="enquire-quick">
            <a href="tel:+918123456789" class="enquire-chip">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.73 2.05z"/></svg>
              Call Now
            </a>
            <a href="https://wa.me/918865076416" target="_blank" class="enquire-chip">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          <div class="enquire-divider">Or fill out the form</div>

          <form id="enquireForm" novalidate>
            <div class="enquire-row">
              <div class="enquire-field">
                <label for="eq_name">Your Name <span class="req">*</span></label>
                <input type="text" id="eq_name" placeholder="Full name" required />
                <span class="eq-field-error" id="eq_err_name"></span>
              </div>
              <div class="enquire-field">
                <label for="eq_phone">Phone <span class="req">*</span></label>
                <input type="tel" id="eq_phone" placeholder="Mobile number" required />
                <span class="eq-field-error" id="eq_err_phone"></span>
              </div>
            </div>

            <div class="enquire-field">
              <label for="eq_service">Service Interested In <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="eq_service" required>
                  <option value="">-- Select a service --</option>
                  <option>Nursing Care at Home</option>
                  <option>Doctor Consultation</option>
                  <option>Medical Equipment Rental</option>
                  <option>Lab Tests at Home</option>
                  <option>Elderly & Palliative Care</option>
                  <option>Health Monitoring & Reports</option>
                  <option>Other / Not Sure</option>
                </select>
                <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <span class="eq-field-error" id="eq_err_service"></span>
            </div>

            <div class="enquire-field">
              <label for="eq_note">Brief Message (Optional)</label>
              <textarea id="eq_note" rows="3" placeholder="e.g. Need a nurse for post-surgery care..."></textarea>
            </div>

            <button type="submit" class="enquire-submit-btn" id="enquireSubmitBtn">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.73 2.05z"/></svg>
              Request Free Callback
            </button>

            <div class="enquire-guarantee">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Your data is 100% private and secure. We will never share your details with anyone.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', enquireHTML);

  // ---- Open / Close Enquire Panel ----
  function openEnquirePanel(preselect) {
    const overlay = document.getElementById('enquireOverlay');
    document.getElementById('enquireFormWrap').style.display = 'block';
    document.getElementById('enquireSuccess').style.display = 'none';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (preselect) {
      const sel = document.getElementById('eq_service');
      if (sel) sel.value = preselect;
    }
    setTimeout(() => document.getElementById('eq_name').focus(), 200);
  }
  function closeEnquirePanel() {
    document.getElementById('enquireOverlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('enquireForm').reset();
    ['eq_err_name','eq_err_phone','eq_err_service'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.textContent = ''; el.style.display = 'none'; }
    });
  }
  document.getElementById('enquireClose').addEventListener('click', closeEnquirePanel);
  document.getElementById('enquireOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeEnquirePanel();
  });
  document.getElementById('enquireDoneBtn').addEventListener('click', closeEnquirePanel);

  // ---- Enquire form submit ----
  document.getElementById('enquireForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('eq_name').value.trim();
    const phone = document.getElementById('eq_phone').value.trim();
    const service = document.getElementById('eq_service').value;

    const setErr = (id, msg) => {
      const el = document.getElementById(id); if (el) { el.textContent = msg; el.style.display = 'block'; }
      const inp = document.getElementById(id.replace('eq_err_','eq_')); if (inp) inp.classList.add('eq-error');
    };
    const clearErr = (id) => {
      const el = document.getElementById(id); if (el) { el.textContent = ''; el.style.display = 'none'; }
      const inp = document.getElementById(id.replace('eq_err_','eq_')); if (inp) inp.classList.remove('eq-error');
    };
    clearErr('eq_err_name'); clearErr('eq_err_phone'); clearErr('eq_err_service');

    if (!name) { setErr('eq_err_name', 'Please enter your name.'); valid = false; }
    if (!phone || !/^[\d\s\+\-]{7,15}$/.test(phone)) { setErr('eq_err_phone', 'Enter a valid phone number.'); valid = false; }
    if (!service) { setErr('eq_err_service', 'Please select a service.'); valid = false; }
    if (!valid) return;

    const btn = document.getElementById('enquireSubmitBtn');
    btn.disabled = true;
    btn.innerHTML = `<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg> Sending...`;

    const formData = new URLSearchParams();
    formData.append("form-name", "enquiry");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("service", service);
    formData.append("message", document.getElementById('eq_note').value.trim());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    })
    .then(() => {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.73 2.05z"/></svg> Request Free Callback`;
      document.getElementById('enquireRef').textContent = 'Ref: EQ-' + Date.now().toString().slice(-6).toUpperCase();
      document.getElementById('enquireFormWrap').style.display = 'none';
      document.getElementById('enquireSuccess').style.display = 'flex';
    })
    .catch(error => {
      btn.disabled = false;
      btn.innerHTML = 'Error. Try Again';
      console.error('Form error:', error);
    });
  });


  // =============================================
  // BOOKING MODAL - Inject HTML into every page
  // =============================================
  const modalHTML = `
  <div id="bookingModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-box">
      <button class="modal-close" id="modalClose" aria-label="Close booking form">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <!-- Header -->
      <div class="modal-header">
        <div class="modal-header-icon">
          <svg width="28" height="28" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div>
          <h2 class="modal-title" id="modalTitle">Book a Care Service</h2>
          <p class="modal-subtitle">Fill in your details and we'll confirm within 1 hour</p>
        </div>
      </div>

      <!-- Success State -->
      <div class="modal-success" id="modalSuccess" style="display:none;">
        <div class="success-icon">
          <svg width="40" height="40" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3>Booking Request Sent!</h3>
        <p>Thank you! Our team will call you within <strong>1 hour</strong> to confirm your appointment.</p>
        <p class="success-ref" id="bookingRef"></p>
        <button class="btn btn-green" id="closeSuccessBtn" style="margin-top:20px;width:100%;justify-content:center;">Done</button>
      </div>

      <!-- Form -->
      <form id="bookingForm" class="booking-form" novalidate>
        <div class="modal-form-grid">
          <div class="modal-field">
            <label for="b_name">Full Name <span class="req">*</span></label>
            <input type="text" id="b_name" placeholder="e.g. Ramesh Sharma" required autocomplete="name"/>
            <span class="field-error" id="err_name"></span>
          </div>
          <div class="modal-field">
            <label for="b_phone">Phone Number <span class="req">*</span></label>
            <input type="tel" id="b_phone" placeholder="e.g. 98765 43210" required autocomplete="tel"/>
            <span class="field-error" id="err_phone"></span>
          </div>
        </div>

        <div class="modal-field">
          <label for="b_email">Email Address</label>
          <input type="email" id="b_email" placeholder="yourname@email.com" autocomplete="email"/>
        </div>

        <div class="modal-field">
          <label for="b_service">Select Service <span class="req">*</span></label>
          <div class="select-wrapper">
            <select id="b_service" required>
              <option value="">-- Choose a service --</option>
              <option value="Nursing Care at Home">Nursing Care at Home</option>
              <option value="Doctor Consultation">Doctor Consultation at Home</option>
              <option value="Medical Equipment Rental">Medical Equipment Rental</option>
              <option value="Lab Tests at Home">Lab Tests at Home</option>
              <option value="Elderly & Palliative Care">Elderly & Palliative Care</option>
              <option value="Health Monitoring & Reports">Health Monitoring & Reports</option>
              <option value="Physiotherapy at Home">Physiotherapy at Home</option>
              <option value="Other">Other / Not Sure</option>
            </select>
            <svg class="select-arrow" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <span class="field-error" id="err_service"></span>
        </div>

        <div class="modal-form-grid">
          <div class="modal-field">
            <label for="b_date">Preferred Date <span class="req">*</span></label>
            <input type="date" id="b_date" required/>
            <span class="field-error" id="err_date"></span>
          </div>
          <div class="modal-field">
            <label for="b_time">Preferred Time</label>
            <div class="select-wrapper">
              <select id="b_time">
                <option value="">-- Any time --</option>
                <option value="Morning (7AM–11AM)">Morning (7AM–11AM)</option>
                <option value="Afternoon (11AM–3PM)">Afternoon (11AM–3PM)</option>
                <option value="Evening (3PM–7PM)">Evening (3PM–7PM)</option>
                <option value="Night (7PM–10PM)">Night (7PM–10PM)</option>
              </select>
              <svg class="select-arrow" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="modal-field">
          <label for="b_address">Patient Address <span class="req">*</span></label>
          <input type="text" id="b_address" placeholder="Full address for home visit" required autocomplete="street-address"/>
          <span class="field-error" id="err_address"></span>
        </div>

        <div class="modal-field">
          <label for="b_notes">Additional Notes</label>
          <textarea id="b_notes" rows="3" placeholder="E.g. patient condition, specific requirements..."></textarea>
        </div>

        <div class="modal-notice">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Our team will call you on your phone number to confirm the booking.
        </div>

        <button type="submit" class="btn btn-green modal-submit-btn" id="bookingSubmitBtn">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Confirm Booking Request
        </button>
      </form>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Set min date to today on the date picker
  const dateInput = document.getElementById('b_date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }

  // ---- Open Modal ----
  function openBookingModal(preselect) {
    const modal = document.getElementById('bookingModal');
    const form = document.getElementById('bookingForm');
    const success = document.getElementById('modalSuccess');
    form.style.display = 'block';
    success.style.display = 'none';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (preselect) {
      const sel = document.getElementById('b_service');
      if (sel) sel.value = preselect;
    }
    // Focus first field
    setTimeout(() => { document.getElementById('b_name').focus(); }, 100);
  }

  // ---- Close Modal ----
  function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('bookingForm').reset();
    clearErrors();
    // Reset date to today
    const dateInput = document.getElementById('b_date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
  }

  document.getElementById('modalClose').addEventListener('click', closeBookingModal);
  document.getElementById('bookingModal').addEventListener('click', function (e) {
    if (e.target === this) closeBookingModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeBookingModal();
  });
  document.getElementById('closeSuccessBtn').addEventListener('click', closeBookingModal);

  // ---- Wire buttons: BOOKING vs ENQUIRE ----
  function wireBookingButtons() {
    document.querySelectorAll('a, button').forEach(el => {
      const text = (el.textContent || '').trim().toLowerCase();
      const href = el.getAttribute('href') || '';
      const isEnquire = text.includes('enquire now');
      const isBooking =
        text.includes('book a care') ||
        text.includes('book a service') ||
        text.includes('book now') ||
        (href === 'contact.html' && text.includes('book'));
      // 'apply now' / 'send your resume' are handled by apply.js
      const isApply = text.includes('apply now') || text.includes('send your resume');

      if (!el.closest('.nav-links') && !el.closest('.footer') && !el.closest('.enquire-quick')) {
        if (isEnquire) {
          el.addEventListener('click', function (e) {
            e.preventDefault();
            let preselect = '';
            const section = el.closest('section, div[id]');
            if (section) {
              const id = section.id || '';
              const map = { nursing: 'Nursing Care at Home', doctor: 'Doctor Consultation', equipment: 'Medical Equipment Rental', lab: 'Lab Tests at Home', elderly: 'Elderly & Palliative Care', monitoring: 'Health Monitoring & Reports' };
              Object.entries(map).forEach(([key, val]) => { if (id.includes(key)) preselect = val; });
            }
            openEnquirePanel(preselect);
          });
        } else if (isBooking) {
          el.addEventListener('click', function (e) {
            e.preventDefault();
            let preselect = '';
            const section = el.closest('section, div[id]');
            if (section) {
              const id = section.id || '';
              const map = { nursing: 'Nursing Care at Home', doctor: 'Doctor Consultation', equipment: 'Medical Equipment Rental', lab: 'Lab Tests at Home', elderly: 'Elderly & Palliative Care', monitoring: 'Health Monitoring & Reports' };
              Object.entries(map).forEach(([key, val]) => { if (id.includes(key)) preselect = val; });
            }
            openBookingModal(preselect);
          });
        }
      }
    });
  }
  wireBookingButtons();


  // ---- Form validation + submit ----
  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = 'block'; }
    const input = document.getElementById(id.replace('err_', 'b_'));
    if (input) input.classList.add('input-error');
  }
  function clearError(id) {
    const el = document.getElementById(id);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
    const input = document.getElementById(id.replace('err_', 'b_'));
    if (input) input.classList.remove('input-error');
  }
  function clearErrors() {
    ['err_name','err_phone','err_service','err_date','err_address'].forEach(clearError);
  }

  // Live validation – clear error on input
  ['b_name','b_phone','b_service','b_date','b_address'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError('err_' + id.replace('b_', '')));
  });

  document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    let valid = true;

    const name = document.getElementById('b_name').value.trim();
    const phone = document.getElementById('b_phone').value.trim();
    const service = document.getElementById('b_service').value;
    const date = document.getElementById('b_date').value;
    const address = document.getElementById('b_address').value.trim();

    if (!name) { showError('err_name', 'Please enter your full name.'); valid = false; }
    if (!phone) { showError('err_phone', 'Please enter your phone number.'); valid = false; }
    else if (!/^[\d\s\+\-]{7,15}$/.test(phone)) { showError('err_phone', 'Enter a valid phone number.'); valid = false; }
    if (!service) { showError('err_service', 'Please select a service.'); valid = false; }
    if (!date) { showError('err_date', 'Please choose a preferred date.'); valid = false; }
    if (!address) { showError('err_address', 'Please enter the patient address.'); valid = false; }

    if (!valid) return;

    const btn = document.getElementById('bookingSubmitBtn');
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
      Processing...`;

    const formData = new URLSearchParams();
    formData.append("form-name", "booking");
    formData.append("fullName", name);
    formData.append("phone", phone);
    formData.append("service", service);
    formData.append("date", date);
    formData.append("time", document.getElementById('b_time').value);
    formData.append("address", address);
    formData.append("notes", document.getElementById('b_notes').value.trim());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    })
    .then(() => {
      btn.disabled = false;
      btn.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Confirm Booking Request`;

      const ref = 'HCK-' + Date.now().toString().slice(-6).toUpperCase();
      document.getElementById('bookingRef').textContent = 'Booking Ref: ' + ref;

      document.getElementById('bookingForm').style.display = 'none';
      document.getElementById('modalSuccess').style.display = 'flex';
    })
    .catch(error => {
      btn.disabled = false;
      btn.innerHTML = 'Error. Try Again';
      console.error('Form error:', error);
    });
  });

  // =============================================
  // MOBILE NAV TOGGLE
  // =============================================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
      spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });
  }

  // =============================================
  // SMOOTH SCROLL
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =============================================
  // CONTACT FORM (contact.html)
  // =============================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
      btn.style.background = '#1f8d44';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3500);
    });
  }

  // =============================================
  // NEWSLETTER FORM
  // =============================================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      const btn = this.querySelector('button');
      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#1f8d44';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    });
  }

  // =============================================
  // SCROLL ANIMATIONS
  // =============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-quick-item, .position-card, .post-card, .why-work-item, .equipment-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });

});

