// HomeCure Healthcare - Apply Now Modal

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // APPLY NOW - MULTI-STEP MODAL (Inject HTML)
  // =============================================
  const applyHTML = `
  <div id="applyOverlay" class="apply-overlay">
    <div class="apply-modal" role="dialog" aria-labelledby="applyTitle">
      <!-- Purple Header with Stepper -->
      <div class="apply-header">
        <button class="apply-close" id="applyClose" aria-label="Close">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="apply-header-top">
          <div class="apply-header-icon">
            <svg width="28" height="28" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <div class="apply-title" id="applyTitle">Join Our Team</div>
            <div class="apply-subtitle">Complete your application in 3 quick steps</div>
          </div>
        </div>
        <!-- Step Indicator -->
        <div class="apply-stepper">
          <div class="apply-step active" id="apStep1"><div class="apply-step-circle" id="apCircle1">1</div><div class="apply-step-label">Personal Info</div></div>
          <div class="apply-step-line" id="apLine1"></div>
          <div class="apply-step" id="apStep2"><div class="apply-step-circle" id="apCircle2">2</div><div class="apply-step-label">Experience</div></div>
          <div class="apply-step-line" id="apLine2"></div>
          <div class="apply-step" id="apStep3"><div class="apply-step-circle" id="apCircle3">3</div><div class="apply-step-label">Resume</div></div>
        </div>
      </div>

      <!-- Body -->
      <div class="apply-body">
        <!-- Success Screen -->
        <div class="apply-success" id="applySuccess">
          <div class="apply-success-icon">
            <svg width="44" height="44" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>Application Submitted! 🎉</h3>
          <p>Thank you for applying to <strong>HomeCure Healthcare</strong>. Our HR team will review your application and contact you within <strong>3–5 working days</strong>.</p>
          <div class="apply-ref" id="applyRef"></div>
          <button class="apply-btn-submit" id="applyDoneBtn" style="margin-top:4px;">Done ✓</button>
        </div>

        <!-- STEP 1: Personal Info -->
        <div class="apply-step-panel active" id="apPanel1">
          <div class="apply-step-heading">Personal Information</div>
          <div class="apply-step-desc">Tell us about yourself so we can get in touch.</div>
          <div class="apply-row">
            <div class="apply-field">
              <label for="ap_fname">First Name <span class="req">*</span></label>
              <input type="text" id="ap_fname" placeholder="e.g. Ramesh" />
              <span class="ap-field-error" id="ap_err_fname"></span>
            </div>
            <div class="apply-field">
              <label for="ap_lname">Last Name <span class="req">*</span></label>
              <input type="text" id="ap_lname" placeholder="e.g. Sharma" />
              <span class="ap-field-error" id="ap_err_lname"></span>
            </div>
          </div>
          <div class="apply-row">
            <div class="apply-field">
              <label for="ap_email">Email Address <span class="req">*</span></label>
              <input type="email" id="ap_email" placeholder="your@email.com" />
              <span class="ap-field-error" id="ap_err_email"></span>
            </div>
            <div class="apply-field">
              <label for="ap_phone">Phone Number <span class="req">*</span></label>
              <input type="tel" id="ap_phone" placeholder="+91 98765 43210" />
              <span class="ap-field-error" id="ap_err_phone"></span>
            </div>
          </div>
          <div class="apply-row">
            <div class="apply-field">
              <label for="ap_city">City <span class="req">*</span></label>
              <input type="text" id="ap_city" placeholder="e.g. Kanpur" />
              <span class="ap-field-error" id="ap_err_city"></span>
            </div>
            <div class="apply-field">
              <label for="ap_gender">Gender</label>
              <div class="select-wrapper">
                <select id="ap_gender">
                  <option value="">-- Select --</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
                <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 2: Position & Experience -->
        <div class="apply-step-panel" id="apPanel2">
          <div class="apply-step-heading">Position & Experience</div>
          <div class="apply-step-desc">Help us understand your professional background.</div>
          <div class="apply-field">
            <label for="ap_position">Position Applied For <span class="req">*</span></label>
            <div class="select-wrapper">
              <select id="ap_position">
                <option value="">-- Select a position --</option>
                <option>Registered Nurse (RN)</option>
                <option>Nursing Assistant / Attendant</option>
                <option>Physiotherapist</option>
                <option>Home Health Aide</option>
                <option>Medical Lab Technician</option>
                <option>Doctor / General Physician</option>
                <option>Operations / Admin Executive</option>
                <option>Other</option>
              </select>
              <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <span class="ap-field-error" id="ap_err_position"></span>
          </div>
          <div class="apply-row">
            <div class="apply-field">
              <label for="ap_exp">Years of Experience <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="ap_exp">
                  <option value="">-- Select --</option>
                  <option>Fresher (0 years)</option>
                  <option>1 – 2 years</option>
                  <option>3 – 5 years</option>
                  <option>6 – 10 years</option>
                  <option>10+ years</option>
                </select>
                <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <span class="ap-field-error" id="ap_err_exp"></span>
            </div>
            <div class="apply-field">
              <label for="ap_qual">Highest Qualification <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="ap_qual">
                  <option value="">-- Select --</option>
                  <option>10th / 12th Pass</option>
                  <option>Diploma / Certificate</option>
                  <option>B.Sc Nursing / GNM</option>
                  <option>Graduate (B.A/B.Sc/B.Com)</option>
                  <option>MBBS / MD</option>
                  <option>Post Graduate</option>
                </select>
                <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <span class="ap-field-error" id="ap_err_qual"></span>
            </div>
          </div>
          <div class="apply-field">
            <label for="ap_current">Current / Previous Employer</label>
            <input type="text" id="ap_current" placeholder="e.g. Apollo Hospitals, Kanpur (Optional)" />
          </div>
          <div class="apply-row">
            <div class="apply-field">
              <label for="ap_notice">Notice Period</label>
              <div class="select-wrapper">
                <select id="ap_notice">
                  <option value="">-- Select --</option>
                  <option>Immediately Available</option>
                  <option>15 days</option>
                  <option>1 month</option>
                  <option>2 months</option>
                  <option>3+ months</option>
                </select>
                <svg class="select-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
            <div class="apply-field">
              <label for="ap_salary">Expected Salary (₹/month)</label>
              <input type="text" id="ap_salary" placeholder="e.g. 25,000" />
            </div>
          </div>
        </div>

        <!-- STEP 3: Resume & Message -->
        <div class="apply-step-panel" id="apPanel3">
          <div class="apply-step-heading">Resume & Cover Letter</div>
          <div class="apply-step-desc">Upload your resume and share a brief introduction.</div>
          <div class="apply-field">
            <label>Upload Your Resume <span class="req">*</span></label>
            <div class="file-upload-zone" id="fileUploadZone">
              <input type="file" id="ap_resume" accept=".pdf,.doc,.docx" />
              <div class="file-upload-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <div class="file-upload-title">Drag & drop or click to upload</div>
              <div class="file-upload-sub">PDF, DOC, or DOCX format</div>
              <div class="file-upload-accepted">Max file size: 5MB</div>
              <div class="file-chosen" id="fileChosen"></div>
            </div>
            <span class="ap-field-error" id="ap_err_resume"></span>
          </div>
          <div class="apply-or">or paste your resume link</div>
          <div class="apply-field">
            <label for="ap_link">Resume / LinkedIn / Drive Link</label>
            <input type="url" id="ap_link" placeholder="https://linkedin.com/in/yourprofile" />
          </div>
          <div class="apply-field">
            <label for="ap_cover">Cover Letter / Message <span class="req">*</span></label>
            <textarea id="ap_cover" rows="4" placeholder="Briefly tell us why you want to join HomeCure Healthcare..."></textarea>
            <span class="ap-field-error" id="ap_err_cover"></span>
          </div>
        </div>
      </div><!-- /apply-body -->

      <!-- Footer nav -->
      <div class="apply-footer" id="applyFooter">
        <button class="apply-btn-back" id="applyBackBtn" style="visibility:hidden;">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <span class="apply-step-counter" id="applyStepCounter">Step 1 of 3</span>
        <button class="apply-btn-next" id="applyNextBtn">
          Next Step <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button class="apply-btn-submit" id="applySubmitBtn" style="display:none;">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Submit Application
        </button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', applyHTML);

  // ---- State ----
  let applyCurrentStep = 1;
  const TOTAL = 3;

  function openApplyModal(position) {
    if (position) {
      const sel = document.getElementById('ap_position');
      if (sel) sel.value = position;
    }
    applyCurrentStep = 1;
    updateApplyStep();
    document.getElementById('applySuccess').style.display = 'none';
    document.getElementById('applyFooter').style.display = 'flex';
    ['apPanel1','apPanel2','apPanel3'].forEach((id, i) => {
      document.getElementById(id).classList.toggle('active', i === 0);
    });
    document.getElementById('applyOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => { const f = document.getElementById('ap_fname'); if (f) f.focus(); }, 150);
  }

  function closeApplyModal() {
    document.getElementById('applyOverlay').classList.remove('open');
    document.body.style.overflow = '';
    applyCurrentStep = 1;
    document.getElementById('applyOverlay').querySelectorAll('input:not([type=file]),select,textarea').forEach(el => { el.value = ''; el.classList.remove('ap-error'); });
    document.querySelectorAll('.ap-field-error').forEach(el => { el.textContent = ''; el.style.display = 'none'; });
    const fc = document.getElementById('fileChosen');
    if (fc) { fc.style.display = 'none'; fc.textContent = ''; }
    updateApplyStep();
  }

  function updateApplyStep() {
    const checkSVG = '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
    for (let i = 1; i <= TOTAL; i++) {
      const step = document.getElementById('apStep' + i);
      const circle = document.getElementById('apCircle' + i);
      if (!step) continue;
      step.classList.remove('active', 'done');
      if (i === applyCurrentStep) step.classList.add('active');
      else if (i < applyCurrentStep) step.classList.add('done');
      if (circle) circle.innerHTML = i < applyCurrentStep ? checkSVG : String(i);
    }
    for (let i = 1; i < TOTAL; i++) {
      const line = document.getElementById('apLine' + i);
      if (line) line.classList.toggle('done', i < applyCurrentStep);
    }
    const backBtn = document.getElementById('applyBackBtn');
    const nextBtn = document.getElementById('applyNextBtn');
    const submitBtn = document.getElementById('applySubmitBtn');
    const counter = document.getElementById('applyStepCounter');
    if (backBtn) backBtn.style.visibility = applyCurrentStep === 1 ? 'hidden' : 'visible';
    if (nextBtn) nextBtn.style.display = applyCurrentStep < TOTAL ? 'flex' : 'none';
    if (submitBtn) submitBtn.style.display = applyCurrentStep === TOTAL ? 'flex' : 'none';
    if (counter) counter.textContent = 'Step ' + applyCurrentStep + ' of ' + TOTAL;
  }

  function setApErr(id, msg) {
    const e = document.getElementById('ap_err_' + id); if (e) { e.textContent = msg; e.style.display = 'block'; }
    const inp = document.getElementById('ap_' + id); if (inp) inp.classList.add('ap-error');
  }
  function clrApErr(id) {
    const e = document.getElementById('ap_err_' + id); if (e) { e.textContent = ''; e.style.display = 'none'; }
    const inp = document.getElementById('ap_' + id); if (inp) inp.classList.remove('ap-error');
  }

  function validateStep(step) {
    let valid = true;
    if (step === 1) {
      ['fname','lname','email','phone','city'].forEach(clrApErr);
      if (!document.getElementById('ap_fname').value.trim()) { setApErr('fname', 'First name is required.'); valid = false; }
      if (!document.getElementById('ap_lname').value.trim()) { setApErr('lname', 'Last name is required.'); valid = false; }
      const em = document.getElementById('ap_email').value.trim();
      if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setApErr('email', 'Enter a valid email address.'); valid = false; }
      const ph = document.getElementById('ap_phone').value.trim();
      if (!ph || !/^[\d\s\+\-]{7,15}$/.test(ph)) { setApErr('phone', 'Enter a valid phone number.'); valid = false; }
      if (!document.getElementById('ap_city').value.trim()) { setApErr('city', 'City is required.'); valid = false; }
    }
    if (step === 2) {
      ['position','exp','qual'].forEach(clrApErr);
      if (!document.getElementById('ap_position').value) { setApErr('position', 'Please select a position.'); valid = false; }
      if (!document.getElementById('ap_exp').value) { setApErr('exp', 'Please select experience level.'); valid = false; }
      if (!document.getElementById('ap_qual').value) { setApErr('qual', 'Please select qualification.'); valid = false; }
    }
    if (step === 3) {
      ['resume','cover'].forEach(clrApErr);
      const hasFile = document.getElementById('ap_resume').files.length > 0;
      const hasLink = document.getElementById('ap_link').value.trim();
      if (!hasFile && !hasLink) { setApErr('resume', 'Please upload your resume or paste a link.'); valid = false; }
      if (!document.getElementById('ap_cover').value.trim()) { setApErr('cover', 'Please write a brief cover message.'); valid = false; }
    }
    return valid;
  }

  // Events
  document.getElementById('applyClose').addEventListener('click', closeApplyModal);
  document.getElementById('applyOverlay').addEventListener('click', function(e) { if (e.target === this) closeApplyModal(); });
  document.getElementById('applyDoneBtn').addEventListener('click', closeApplyModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('applyOverlay').classList.contains('open')) closeApplyModal();
  });

  document.getElementById('applyBackBtn').addEventListener('click', () => {
    if (applyCurrentStep > 1) {
      ['apPanel1','apPanel2','apPanel3'].forEach((id,i) => document.getElementById(id).classList.toggle('active', i === applyCurrentStep - 2));
      applyCurrentStep--;
      updateApplyStep();
    }
  });

  document.getElementById('applyNextBtn').addEventListener('click', () => {
    if (validateStep(applyCurrentStep)) {
      ['apPanel1','apPanel2','apPanel3'].forEach((id,i) => document.getElementById(id).classList.toggle('active', i === applyCurrentStep));
      applyCurrentStep++;
      updateApplyStep();
    }
  });

  document.getElementById('applySubmitBtn').addEventListener('click', () => {
    if (!validateStep(3)) return;
    const btn = document.getElementById('applySubmitBtn');
    btn.disabled = true;
    btn.innerHTML = `<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg> Submitting...`;

    const formData = new FormData();
    formData.append("form-name", "application");
    formData.append("firstName", document.getElementById('ap_fname').value);
    formData.append("lastName", document.getElementById('ap_lname').value);
    formData.append("email", document.getElementById('ap_email').value);
    formData.append("phone", document.getElementById('ap_phone').value);
    formData.append("city", document.getElementById('ap_city').value);
    formData.append("gender", document.getElementById('ap_gender').value);
    formData.append("position", document.getElementById('ap_position').value);
    formData.append("experience", document.getElementById('ap_exp').value);
    formData.append("qualification", document.getElementById('ap_qual').value);
    formData.append("currentEmployer", document.getElementById('ap_current').value);
    formData.append("noticePeriod", document.getElementById('ap_notice').value);
    formData.append("expectedSalary", document.getElementById('ap_salary').value);
    formData.append("resumeLink", document.getElementById('ap_link').value);
    formData.append("coverLetter", document.getElementById('ap_cover').value);
    
    const resumeInput = document.getElementById('ap_resume');
    if (resumeInput.files.length > 0) {
      formData.append("resumeFile", resumeInput.files[0]);
    }

    fetch("/", {
      method: "POST",
      body: formData
    })
    .then(() => {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Submit Application`;
      document.getElementById('applyRef').textContent = 'Application Ref: APP-' + Date.now().toString().slice(-6).toUpperCase();
      ['apPanel1','apPanel2','apPanel3'].forEach(id => document.getElementById(id).classList.remove('active'));
      document.getElementById('applyFooter').style.display = 'none';
      document.getElementById('applySuccess').style.display = 'flex';
    })
    .catch(error => {
      btn.disabled = false;
      btn.innerHTML = 'Error. Try Again';
      console.error('Apply Form error:', error);
    });
  });

  // File upload display
  document.getElementById('ap_resume').addEventListener('change', function() {
    const fc = document.getElementById('fileChosen');
    if (this.files.length) { fc.textContent = '✓  ' + this.files[0].name; fc.style.display = 'block'; }
  });

  // Drag & drop styling
  const zone = document.getElementById('fileUploadZone');
  if (zone) {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('drag-over'); });
  }

  // ---- Wire Apply Now / Send Resume buttons ----
  document.querySelectorAll('a, button').forEach(el => {
    const text = (el.textContent || '').trim().toLowerCase();
    const isApply = text.includes('apply now') || text.includes('send your resume');
    if (isApply && !el.closest('.nav-links') && !el.closest('.footer')) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        // Try to detect position from nearby card heading
        let position = '';
        const card = el.closest('.position-card');
        if (card) {
          const title = card.querySelector('.position-title');
          if (title) position = title.textContent.trim();
        }
        openApplyModal(position);
      });
    }
  });

  // Expose globally so main.js can exclude these
  window.openApplyModal = openApplyModal;
});
