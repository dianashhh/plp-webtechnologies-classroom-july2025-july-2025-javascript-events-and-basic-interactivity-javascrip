// === Light/Dark Mode Toggle ===
// Toggles the page theme between light and dark modes
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});

// === Counter Feature ===
// Simple counter with increment and reset functionality
let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
	counter++;
	counterValue.textContent = counter;
});

resetBtn.addEventListener('click', () => {
	counter = 0;
	counterValue.textContent = counter;
});

// === Collapsible FAQ Section ===
// Expands/collapses answers when questions are clicked
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
	btn.addEventListener('click', () => {
		const answer = btn.nextElementSibling;
		answer.classList.toggle('open');
		btn.classList.toggle('active');
	});
});

// === Form Validation ===
// Validates name, email, and password fields with custom logic
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

function validateName(name) {
	return name.trim().length >= 2;
}

function validateEmail(email) {
	// Simple email regex
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
	// At least 6 chars, 1 number, 1 letter
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function showError(input, errorElem, message) {
	errorElem.textContent = message;
	input.classList.add('input-error');
}

function clearError(input, errorElem) {
	errorElem.textContent = '';
	input.classList.remove('input-error');
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	let valid = true;
	formSuccess.textContent = '';

	// Name validation
	if (!validateName(nameInput.value)) {
		showError(nameInput, nameError, 'Name must be at least 2 characters.');
		valid = false;
	} else {
		clearError(nameInput, nameError);
	}

	// Email validation
	if (!validateEmail(emailInput.value)) {
		showError(emailInput, emailError, 'Enter a valid email address.');
		valid = false;
	} else {
		clearError(emailInput, emailError);
	}

	// Password validation
	if (!validatePassword(passwordInput.value)) {
		showError(passwordInput, passwordError, 'Password must be 6+ chars, include a letter and a number.');
		valid = false;
	} else {
		clearError(passwordInput, passwordError);
	}

	if (valid) {
		formSuccess.textContent = 'Sign up successful!';
		form.reset();
	}
});

// Real-time validation feedback
nameInput.addEventListener('input', () => {
	if (validateName(nameInput.value)) {
		clearError(nameInput, nameError);
	}
});
emailInput.addEventListener('input', () => {
	if (validateEmail(emailInput.value)) {
		clearError(emailInput, emailError);
	}
});
passwordInput.addEventListener('input', () => {
	if (validatePassword(passwordInput.value)) {
		clearError(passwordInput, passwordError);
	}
});
