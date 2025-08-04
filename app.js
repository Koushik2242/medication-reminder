// Comprehensive Medicines Database
const medicinesDatabase = {
    "Aspirin": "nausea, stomach upset, heartburn, bleeding risk, tinnitus",
    "Paracetamol": "liver damage (high doses), nausea, skin rash",
    "Ibuprofen": "stomach upset, nausea, dizziness, kidney problems, heartburn",
    "Naproxen": "stomach pain, nausea, headache, dizziness, drowsiness",
    "Diclofenac": "stomach upset, nausea, diarrhea, dizziness, headache",
    "Tramadol": "nausea, dizziness, drowsiness, constipation, headache",
    "Codeine": "drowsiness, nausea, constipation, dizziness, vomiting",
    "Morphine": "drowsiness, nausea, constipation, confusion, respiratory depression",
    "Amoxicillin": "nausea, diarrhea, stomach upset, skin rash, yeast infections",
    "Azithromycin": "nausea, diarrhea, stomach pain, headache, dizziness",
    "Ciprofloxacin": "nausea, diarrhea, dizziness, headache, tendon problems",
    "Doxycycline": "nausea, upset stomach, photosensitivity, diarrhea",
    "Cephalexin": "diarrhea, nausea, stomach upset, skin rash, dizziness",
    "Clindamycin": "diarrhea, nausea, stomach pain, metallic taste",
    "Metronidazole": "nausea, metallic taste, diarrhea, dizziness, headache",
    "Flucloxacillin": "nausea, diarrhea, stomach upset, skin rash",
    "Clarithromycin": "nausea, diarrhea, stomach pain, headache, taste changes",
    "Erythromycin": "nausea, vomiting, stomach pain, diarrhea",
    "Amlodipine": "swollen ankles, fatigue, dizziness, flushing, palpitations",
    "Lisinopril": "dry cough, dizziness, headache, fatigue, nausea",
    "Losartan": "dizziness, fatigue, back pain, diarrhea, cough",
    "Atenolol": "fatigue, dizziness, cold hands/feet, nausea, depression",
    "Metoprolol": "fatigue, dizziness, depression, nausea, cold extremities",
    "Furosemide": "dehydration, dizziness, electrolyte imbalance, nausea",
    "Warfarin": "bleeding, bruising, nausea, fatigue, hair loss",
    "Digoxin": "nausea, vomiting, diarrhea, confusion, vision changes",
    "Ramipril": "dry cough, dizziness, fatigue, headache, nausea",
    "Candesartan": "dizziness, headache, back pain, fatigue",
    "Metformin": "nausea, diarrhea, stomach upset, metallic taste, vitamin B12 deficiency",
    "Gliclazide": "hypoglycemia, nausea, diarrhea, skin rash, weight gain",
    "Insulin": "hypoglycemia, weight gain, injection site reactions, swelling",
    "Sitagliptin": "headache, runny nose, sore throat, upper respiratory infection",
    "Sertraline": "nausea, diarrhea, dry mouth, drowsiness, sexual dysfunction",
    "Fluoxetine": "nausea, headache, drowsiness, dry mouth, sexual dysfunction",
    "Citalopram": "nausea, dry mouth, drowsiness, sweating, sexual dysfunction",
    "Escitalopram": "nausea, drowsiness, dry mouth, constipation, sexual dysfunction",
    "Venlafaxine": "nausea, drowsiness, dry mouth, constipation, sweating",
    "Mirtazapine": "drowsiness, weight gain, dry mouth, constipation, dizziness",
    "Amitriptyline": "drowsiness, dry mouth, constipation, blurred vision, weight gain",
    "Lorazepam": "drowsiness, dizziness, weakness, confusion, memory problems",
    "Diazepam": "drowsiness, muscle weakness, fatigue, confusion, memory impairment",
    "Alprazolam": "drowsiness, dizziness, fatigue, confusion, memory problems",
    "Salbutamol": "tremor, nervousness, headache, rapid heartbeat, throat irritation",
    "Prednisolone": "increased appetite, weight gain, mood changes, insomnia, stomach upset",
    "Beclomethasone": "throat irritation, hoarse voice, oral thrush, cough",
    "Montelukast": "headache, stomach pain, fatigue, fever, cough",
    "Theophylline": "nausea, vomiting, headache, insomnia, rapid heartbeat",
    "Omeprazole": "headache, stomach pain, nausea, diarrhea, constipation",
    "Lansoprazole": "headache, nausea, stomach pain, constipation, diarrhea",
    "Ranitidine": "headache, dizziness, constipation, diarrhea, fatigue",
    "Domperidone": "headache, dry mouth, stomach cramps, breast tenderness",
    "Metoclopramide": "drowsiness, restlessness, fatigue, depression, movement disorders",
    "Loperamide": "constipation, dizziness, drowsiness, nausea, dry mouth",
    "Senna": "stomach cramps, diarrhea, nausea, electrolyte imbalance",
    "Lactulose": "bloating, gas, stomach cramps, nausea, diarrhea",
    "Levothyroxine": "headache, insomnia, nervousness, tremor, increased appetite",
    "Estradiol": "nausea, headache, breast tenderness, mood changes, bloating",
    "Testosterone": "acne, mood swings, increased aggression, fluid retention",
    "Prednisone": "increased appetite, weight gain, mood changes, insomnia, high blood sugar",
    "Gabapentin": "dizziness, drowsiness, fatigue, coordination problems, blurred vision",
    "Pregabalin": "dizziness, drowsiness, dry mouth, blurred vision, weight gain",
    "Carbamazepine": "dizziness, drowsiness, nausea, blurred vision, skin rash",
    "Phenytoin": "gum overgrowth, drowsiness, confusion, skin rash, coordination problems",
    "Levetiracetam": "drowsiness, weakness, dizziness, infection, behavioral changes",
    "Cetirizine": "drowsiness, dry mouth, fatigue, dizziness, sore throat",
    "Loratadine": "headache, drowsiness, fatigue, dry mouth, nausea",
    "Fexofenadine": "headache, drowsiness, nausea, dizziness, menstrual changes",
    "Chlorpheniramine": "drowsiness, dry mouth, blurred vision, constipation, difficulty urinating",
    "Diphenhydramine": "drowsiness, dry mouth, blurred vision, constipation, dizziness",
    "Promethazine": "drowsiness, dry mouth, blurred vision, constipation, dizziness",
    "Zolpidem": "drowsiness, dizziness, diarrhea, drugged feeling, headache",
    "Zopiclone": "metallic taste, dry mouth, drowsiness, dizziness, headache",
    "Temazepam": "drowsiness, dizziness, headache, nausea, confusion",
    "Vitamin D": "nausea, vomiting, weakness, kidney problems (high doses)",
    "Vitamin B12": "diarrhea, itching, blood clots, allergic reactions",
    "Iron": "constipation, nausea, stomach upset, dark stools, metallic taste",
    "Calcium": "constipation, kidney stones, nausea, interference with other medications",
    "Folic Acid": "nausea, loss of appetite, bloating, gas, bitter taste",
    "Timolol": "eye irritation, blurred vision, headache, dizziness, fatigue",
    "Latanoprost": "eye irritation, blurred vision, eye color changes, eyelash growth",
    "Chloramphenicol": "eye irritation, blurred vision, allergic reactions",
    "Hydrocortisone": "skin thinning, burning, itching, irritation, stretch marks",
    "Clotrimazole": "skin irritation, burning, itching, redness, swelling",
    "Aciclovir": "skin irritation, burning, itching, rash, dry skin",
    "Allopurinol": "skin rash, nausea, diarrhea, drowsiness, headache",
    "Simvastatin": "muscle pain, headache, nausea, constipation, memory problems",
    "Atorvastatin": "muscle pain, joint pain, nausea, headache, insomnia",
    "Bisoprolol": "fatigue, dizziness, headache, cold extremities, nausea",
    "Spironolactone": "dizziness, headache, stomach upset, breast tenderness, irregular periods",
    "Tamsulosin": "dizziness, headache, abnormal ejaculation, rhinitis, weakness",
    "Finasteride": "decreased libido, erectile dysfunction, breast tenderness, depression",
    "Sildenafil": "headache, flushing, upset stomach, abnormal vision, nasal congestion",
    "Tadalafil": "headache, indigestion, back pain, muscle aches, flushing",
    "Doxazosin": "dizziness, fatigue, headache, nausea, drowsiness",
    "Indapamide": "headache, dizziness, fatigue, nausea, muscle cramps",
    "Bendroflumethiazide": "dizziness, headache, nausea, muscle cramps, electrolyte imbalance",
    "Alendronic Acid": "stomach upset, nausea, heartburn, muscle pain, jaw problems",
    "Risedronate": "stomach upset, heartburn, nausea, diarrhea, headache",
    "Calcium Carbonate": "constipation, gas, nausea, kidney stones, interference with medications",
    "Magnesium": "diarrhea, nausea, stomach upset, muscle weakness, irregular heartbeat",
    "Multivitamin": "nausea, stomach upset, constipation, dark stools, allergic reactions",
    "Omega-3": "fishy aftertaste, nausea, diarrhea, heartburn, bad breath",
    "Probiotics": "gas, bloating, upset stomach, skin rash, infections (rare)",
    "Melatonin": "drowsiness, headache, nausea, dizziness, irritability",
    "Zinc": "nausea, vomiting, diarrhea, metallic taste, stomach upset",
    "Vitamin C": "nausea, diarrhea, stomach cramps, heartburn, kidney stones (high doses)",
    "Biotin": "nausea, cramping, diarrhea, skin rash, interference with lab tests",
    "Turmeric": "stomach upset, nausea, dizziness, diarrhea, blood thinning",
    "Ginkgo": "headache, nausea, diarrhea, dizziness, skin reactions",
    "Echinacea": "nausea, stomach pain, dizziness, skin rash, allergic reactions",
    "St John's Wort": "nausea, diarrhea, confusion, fatigue, drug interactions",
    "Valerian": "headache, dizziness, stomach upset, dry mouth, vivid dreams",
    "Hydrochlorothiazide": "dizziness, headache, dehydration, electrolyte imbalance, nausea",
    "Pantoprazole": "headache, nausea, stomach pain, diarrhea, dizziness",
    "Esomeprazole": "headache, nausea, diarrhea, stomach pain, dry mouth",
    "Terbinafine": "headache, nausea, stomach upset, taste changes, skin rash",
    "Fluconazole": "nausea, headache, stomach pain, dizziness, skin rash",
    "Ketoconazole": "nausea, vomiting, stomach pain, headache, dizziness",
    "Miconazole": "skin irritation, burning, itching, redness, allergic reactions",
    "Nystatin": "nausea, vomiting, diarrhea, stomach upset, skin irritation",
    "Acetaminophen": "liver damage (high doses), nausea, skin rash, allergic reactions",
    "Cyclobenzaprine": "drowsiness, dry mouth, dizziness, fatigue, blurred vision",
    "Baclofen": "drowsiness, dizziness, weakness, fatigue, nausea",
    "Tizanidine": "drowsiness, dizziness, dry mouth, weakness, fatigue",
    "Methocarbamol": "drowsiness, dizziness, nausea, blurred vision, headache"
};

// Medication Reminder App
class MedicationReminderApp {
    constructor() {
        this.medications = [];
        this.notifications = new Map();
        this.currentNotification = null;
        this.selectedAutocompleteIndex = -1;
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.requestNotificationPermission();
        this.updateCurrentTime();
        this.renderMedications();
        this.renderMissedDoses();
        this.scheduleAllMedications();
        
        // Update time every minute
        setInterval(() => this.updateCurrentTime(), 60000);
        
        // Check for missed doses every minute
        setInterval(() => this.checkMissedDoses(), 60000);
    }

    // Data Management
    loadData() {
        const savedMedications = localStorage.getItem('medications');
        if (savedMedications) {
            this.medications = JSON.parse(savedMedications);
            // Add side effects to existing medications if missing
            this.medications.forEach(med => {
                if (!med.sideEffects && medicinesDatabase[med.name]) {
                    med.sideEffects = medicinesDatabase[med.name];
                }
            });
        } else {
            // Load sample data for first time users
            this.medications = [
                {
                    id: 1,
                    name: "Aspirin",
                    dose: "100mg",
                    instructions: "with food",
                    sideEffects: medicinesDatabase["Aspirin"],
                    scheduleType: "daily",
                    times: ["09:00"],
                    nextDose: this.getNextDoseTime("daily", ["09:00"]),
                    missedDoses: [],
                    created: new Date().toISOString(),
                    active: true
                },
                {
                    id: 2,
                    name: "Vitamin D",
                    dose: "1000 IU",
                    instructions: "empty stomach",
                    sideEffects: medicinesDatabase["Vitamin D"],
                    scheduleType: "daily",
                    times: ["08:00"],
                    nextDose: this.getNextDoseTime("daily", ["08:00"]),
                    missedDoses: [],
                    created: new Date().toISOString(),
                    active: true
                }
            ];
            this.saveData();
        }
    }

    saveData() {
        localStorage.setItem('medications', JSON.stringify(this.medications));
    }

    // Autocomplete functionality
    setupAutocomplete() {
        const medicationNameInput = document.getElementById('medicationName');
        const autocompleteDropdown = document.getElementById('autocompleteDropdown');
        const sideEffectsField = document.getElementById('medicationSideEffects');
        const editSideEffectsBtn = document.getElementById('editSideEffectsBtn');

        if (!medicationNameInput || !autocompleteDropdown || !sideEffectsField) return;

        medicationNameInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length === 0) {
                this.hideAutocomplete();
                this.clearSideEffects();
                return;
            }

            const matches = Object.keys(medicinesDatabase)
                .filter(med => med.toLowerCase().includes(query))
                .slice(0, 8); // Limit to 8 suggestions

            if (matches.length > 0) {
                this.showAutocomplete(matches, query);
            } else {
                this.hideAutocomplete();
                this.clearSideEffects();
            }
        });

        medicationNameInput.addEventListener('keydown', (e) => {
            const dropdown = document.getElementById('autocompleteDropdown');
            const items = dropdown.querySelectorAll('.autocomplete-item');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectedAutocompleteIndex = Math.min(this.selectedAutocompleteIndex + 1, items.length - 1);
                this.highlightAutocompleteItem();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectedAutocompleteIndex = Math.max(this.selectedAutocompleteIndex - 1, -1);
                this.highlightAutocompleteItem();
            } else if (e.key === 'Enter' && this.selectedAutocompleteIndex >= 0) {
                e.preventDefault();
                const selectedItem = items[this.selectedAutocompleteIndex];
                if (selectedItem) {
                    this.selectMedication(selectedItem.textContent);
                }
            } else if (e.key === 'Escape') {
                this.hideAutocomplete();
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!medicationNameInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
                this.hideAutocomplete();
            }
        });

        // Edit side effects button
        if (editSideEffectsBtn) {
            editSideEffectsBtn.addEventListener('click', () => {
                sideEffectsField.removeAttribute('readonly');
                sideEffectsField.focus();
                editSideEffectsBtn.textContent = 'Save';
                editSideEffectsBtn.onclick = () => {
                    sideEffectsField.setAttribute('readonly', true);
                    editSideEffectsBtn.textContent = 'Edit Side Effects';
                    editSideEffectsBtn.onclick = null;
                    this.setupEditSideEffectsHandler();
                };
            });
        }
    }

    setupEditSideEffectsHandler() {
        const editSideEffectsBtn = document.getElementById('editSideEffectsBtn');
        if (editSideEffectsBtn) {
            editSideEffectsBtn.addEventListener('click', () => {
                const sideEffectsField = document.getElementById('medicationSideEffects');
                sideEffectsField.removeAttribute('readonly');
                sideEffectsField.focus();
                editSideEffectsBtn.textContent = 'Save';
                editSideEffectsBtn.onclick = () => {
                    sideEffectsField.setAttribute('readonly', true);
                    editSideEffectsBtn.textContent = 'Edit Side Effects';
                    editSideEffectsBtn.onclick = null;
                    this.setupEditSideEffectsHandler();
                };
            });
        }
    }

    showAutocomplete(matches, query) {
        const dropdown = document.getElementById('autocompleteDropdown');
        if (!dropdown) return;

        this.selectedAutocompleteIndex = -1;
        
        dropdown.innerHTML = matches.map(med => {
            const highlightedName = med.replace(
                new RegExp(`(${query})`, 'gi'),
                '<strong>$1</strong>'
            );
            return `<div class="autocomplete-item" data-medication="${med}">${highlightedName}</div>`;
        }).join('');

        // Add click handlers
        dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', () => {
                this.selectMedication(item.dataset.medication);
            });
        });

        dropdown.classList.remove('hidden');
    }

    hideAutocomplete() {
        const dropdown = document.getElementById('autocompleteDropdown');
        if (dropdown) {
            dropdown.classList.add('hidden');
        }
        this.selectedAutocompleteIndex = -1;
    }

    highlightAutocompleteItem() {
        const dropdown = document.getElementById('autocompleteDropdown');
        const items = dropdown.querySelectorAll('.autocomplete-item');
        
        items.forEach((item, index) => {
            if (index === this.selectedAutocompleteIndex) {
                item.classList.add('highlighted');
            } else {
                item.classList.remove('highlighted');
            }
        });
    }

    selectMedication(medicationName) {
        const medicationNameInput = document.getElementById('medicationName');
        const sideEffectsField = document.getElementById('medicationSideEffects');
        const editSideEffectsBtn = document.getElementById('editSideEffectsBtn');

        if (medicationNameInput) {
            medicationNameInput.value = medicationName;
        }

        if (medicinesDatabase[medicationName] && sideEffectsField) {
            sideEffectsField.value = medicinesDatabase[medicationName];
            sideEffectsField.setAttribute('readonly', true);
            if (editSideEffectsBtn) {
                editSideEffectsBtn.classList.remove('hidden');
            }
        }

        this.hideAutocomplete();
    }

    clearSideEffects() {
        const sideEffectsField = document.getElementById('medicationSideEffects');
        const editSideEffectsBtn = document.getElementById('editSideEffectsBtn');

        if (sideEffectsField) {
            sideEffectsField.value = '';
            sideEffectsField.removeAttribute('readonly');
            sideEffectsField.placeholder = 'Enter side effects manually if medication is not in our database...';
        }
        
        if (editSideEffectsBtn) {
            editSideEffectsBtn.classList.add('hidden');
        }
    }

    // Event Listeners
    setupEventListeners() {
        this.setupAutocomplete();

        // Toggle form
        const toggleBtn = document.getElementById('toggleFormBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleAddForm();
            });
        }

        // Cancel form
        const cancelBtn = document.getElementById('cancelBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideAddForm();
            });
        }

        // Schedule type change
        const scheduleType = document.getElementById('scheduleType');
        if (scheduleType) {
            scheduleType.addEventListener('change', (e) => {
                this.showScheduleOptions(e.target.value);
            });
        }

        // Add medication form
        const medicationForm = document.getElementById('medicationForm');
        if (medicationForm) {
            medicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.addMedication();
            });
        }

        // Edit medication form
        const editForm = document.getElementById('editMedicationForm');
        if (editForm) {
            editForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.updateMedication();
            });
        }

        // Close modals
        const closeEditModal = document.getElementById('closeEditModal');
        const cancelEditBtn = document.getElementById('cancelEditBtn');
        const closeSideEffectsModal = document.getElementById('closeSideEffectsModal');
        const closeSideEffectsBtn = document.getElementById('closeSideEffectsBtn');

        if (closeEditModal) {
            closeEditModal.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideEditModal();
            });
        }

        if (cancelEditBtn) {
            cancelEditBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideEditModal();
            });
        }

        if (closeSideEffectsModal) {
            closeSideEffectsModal.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideSideEffectsModal();
            });
        }

        if (closeSideEffectsBtn) {
            closeSideEffectsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideSideEffectsModal();
            });
        }

        // Notification modal actions
        const markTakenBtn = document.getElementById('markTakenBtn');
        if (markTakenBtn) {
            markTakenBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.markAsTaken();
            });
        }

        const markMissedBtn = document.getElementById('markMissedBtn');
        if (markMissedBtn) {
            markMissedBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.markAsMissed();
            });
        }

        // Snooze buttons
        document.querySelectorAll('.snooze-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const minutes = parseInt(e.target.dataset.minutes);
                this.snoozeNotification(minutes);
            });
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.add('hidden');
            }
        });
    }

    // UI Management
    updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const currentTimeEl = document.getElementById('currentTime');
        if (currentTimeEl) {
            currentTimeEl.textContent = `${dateString} - ${timeString}`;
        }
    }

    toggleAddForm() {
        const form = document.getElementById('addMedicationForm');
        const btn = document.getElementById('toggleFormBtn');
        
        if (!form || !btn) return;
        
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden');
            btn.innerHTML = '<span class="btn-icon">−</span>Cancel';
        } else {
            this.hideAddForm();
        }
    }

    hideAddForm() {
        const form = document.getElementById('addMedicationForm');
        const btn = document.getElementById('toggleFormBtn');
        
        if (!form || !btn) return;
        
        form.classList.add('hidden');
        btn.innerHTML = '<span class="btn-icon">+</span>Add Medication';
        
        const medicationForm = document.getElementById('medicationForm');
        if (medicationForm) {
            medicationForm.reset();
        }
        this.showScheduleOptions('daily');
        this.clearSideEffects();
        this.hideAutocomplete();
    }

    showScheduleOptions(scheduleType) {
        // Hide all schedule options
        document.querySelectorAll('.schedule-option').forEach(option => {
            option.classList.add('hidden');
        });

        // Show selected schedule option
        const optionMap = {
            'daily': 'dailySchedule',
            'twice-daily': 'twiceDailySchedule',
            'every-x-hours': 'everyHoursSchedule',
            'weekly': 'weeklySchedule'
        };

        const targetOption = document.getElementById(optionMap[scheduleType]);
        if (targetOption) {
            targetOption.classList.remove('hidden');
        }
    }

    // Side Effects Modal
    showSideEffectsModal(medication) {
        const modal = document.getElementById('sideEffectsModal');
        const content = document.getElementById('sideEffectsDetailsContent');
        
        if (!modal || !content) return;

        const sideEffects = medication.sideEffects || 'No side effects information available';
        const sideEffectsList = sideEffects.split(',').map(effect => effect.trim());

        content.innerHTML = `
            <div class="side-effects-medication-name">${medication.name}</div>
            <div class="side-effects-list">
                <h4><span class="warning-icon">⚠️</span> Possible Side Effects</h4>
                <ul class="side-effects-items">
                    ${sideEffectsList.map(effect => `<li>${effect}</li>`).join('')}
                </ul>
                <p style="margin-top: 16px; font-size: 12px; color: var(--color-text-secondary);">
                    <strong>Note:</strong> This is not a complete list. Contact your healthcare provider if you experience any concerning symptoms.
                </p>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    hideSideEffectsModal() {
        const modal = document.getElementById('sideEffectsModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Medication Management
    addMedication() {
        const formData = this.getFormData();
        if (!formData) return;

        const medication = {
            id: Date.now(),
            name: formData.name,
            dose: formData.dose,
            instructions: formData.instructions,
            sideEffects: formData.sideEffects || '',
            scheduleType: formData.scheduleType,
            times: formData.times,
            nextDose: this.getNextDoseTime(formData.scheduleType, formData.times),
            missedDoses: [],
            created: new Date().toISOString(),
            active: true
        };

        this.medications.push(medication);
        this.saveData();
        this.renderMedications();
        this.scheduleMedication(medication);
        this.hideAddForm();
        
        this.showNotification('Medication added successfully!', 'success');
    }

    getFormData() {
        const nameEl = document.getElementById('medicationName');
        const doseEl = document.getElementById('medicationDose');
        const instructionsEl = document.getElementById('medicationInstructions');
        const scheduleTypeEl = document.getElementById('scheduleType');
        const sideEffectsEl = document.getElementById('medicationSideEffects');

        if (!nameEl || !doseEl || !instructionsEl || !scheduleTypeEl) {
            this.showNotification('Form elements not found', 'error');
            return null;
        }

        const name = nameEl.value.trim();
        const dose = doseEl.value.trim();
        const instructions = instructionsEl.value;
        const scheduleType = scheduleTypeEl.value;
        const sideEffects = sideEffectsEl ? sideEffectsEl.value.trim() : '';

        if (!name || !dose) {
            this.showNotification('Please fill in all required fields', 'error');
            return null;
        }

        let times = [];
        
        switch (scheduleType) {
            case 'daily':
                const dailyTimeEl = document.getElementById('dailyTime');
                if (dailyTimeEl) times = [dailyTimeEl.value];
                break;
            case 'twice-daily':
                const morningTimeEl = document.getElementById('morningTime');
                const eveningTimeEl = document.getElementById('eveningTime');
                if (morningTimeEl && eveningTimeEl) {
                    times = [morningTimeEl.value, eveningTimeEl.value];
                }
                break;
            case 'every-x-hours':
                const hoursEl = document.getElementById('intervalHours');
                const startTimeEl = document.getElementById('startTime');
                if (hoursEl && startTimeEl) {
                    const hours = parseInt(hoursEl.value);
                    const startTime = startTimeEl.value;
                    times = this.generateHourlyTimes(startTime, hours);
                }
                break;
            case 'weekly':
                const dayEl = document.getElementById('weeklyDay');
                const timeEl = document.getElementById('weeklyTime');
                if (dayEl && timeEl) {
                    const day = dayEl.value;
                    const time = timeEl.value;
                    times = [`${day}:${time}`];
                }
                break;
        }

        return { name, dose, instructions, sideEffects, scheduleType, times };
    }

    generateHourlyTimes(startTime, intervalHours) {
        const times = [];
        const [hours, minutes] = startTime.split(':').map(Number);
        let currentHour = hours;

        for (let i = 0; i < 24 / intervalHours; i++) {
            const timeString = `${currentHour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            times.push(timeString);
            currentHour = (currentHour + intervalHours) % 24;
        }

        return times;
    }

    getNextDoseTime(scheduleType, times) {
        const now = new Date();
        
        switch (scheduleType) {
            case 'daily':
            case 'twice-daily':
                return this.getNextDailyDose(times, now);
            case 'every-x-hours':
                return this.getNextHourlyDose(times, now);
            case 'weekly':
                return this.getNextWeeklyDose(times[0], now);
            default:
                return now.toISOString();
        }
    }

    getNextDailyDose(times, now) {
        const today = new Date(now);
        today.setSeconds(0, 0);

        for (const time of times) {
            const [hours, minutes] = time.split(':').map(Number);
            const doseTime = new Date(today);
            doseTime.setHours(hours, minutes, 0, 0);

            if (doseTime > now) {
                return doseTime.toISOString();
            }
        }

        // If all times today have passed, get first time tomorrow
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const [hours, minutes] = times[0].split(':').map(Number);
        tomorrow.setHours(hours, minutes, 0, 0);
        
        return tomorrow.toISOString();
    }

    getNextHourlyDose(times, now) {
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        for (const time of times) {
            if (time > currentTime) {
                const [hours, minutes] = time.split(':').map(Number);
                const doseTime = new Date(now);
                doseTime.setHours(hours, minutes, 0, 0);
                return doseTime.toISOString();
            }
        }

        // Next dose is tomorrow at first time
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const [hours, minutes] = times[0].split(':').map(Number);
        tomorrow.setHours(hours, minutes, 0, 0);
        
        return tomorrow.toISOString();
    }

    getNextWeeklyDose(dayTime, now) {
        const [dayOfWeek, time] = dayTime.split(':');
        const [hours, minutes] = time.split(':').map(Number);
        const targetDay = parseInt(dayOfWeek);
        
        const nextDose = new Date(now);
        const currentDay = nextDose.getDay();
        const daysUntilTarget = (targetDay - currentDay + 7) % 7;
        
        if (daysUntilTarget === 0) {
            // Today is the target day, check if time has passed
            const todayDose = new Date(now);
            todayDose.setHours(hours, minutes, 0, 0);
            
            if (todayDose > now) {
                return todayDose.toISOString();
            }
            
            // Time has passed, next dose is next week
            nextDose.setDate(nextDose.getDate() + 7);
        } else {
            nextDose.setDate(nextDose.getDate() + daysUntilTarget);
        }
        
        nextDose.setHours(hours, minutes, 0, 0);
        return nextDose.toISOString();
    }

    editMedication(id) {
        const medication = this.medications.find(med => med.id === id);
        if (!medication) return;

        const editIdEl = document.getElementById('editMedicationId');
        const editNameEl = document.getElementById('editMedicationName');
        const editDoseEl = document.getElementById('editMedicationDose');
        const editInstructionsEl = document.getElementById('editMedicationInstructions');
        const editSideEffectsEl = document.getElementById('editMedicationSideEffects');
        const editModalEl = document.getElementById('editModal');

        if (editIdEl) editIdEl.value = medication.id;
        if (editNameEl) editNameEl.value = medication.name;
        if (editDoseEl) editDoseEl.value = medication.dose;
        if (editInstructionsEl) editInstructionsEl.value = medication.instructions;
        if (editSideEffectsEl) editSideEffectsEl.value = medication.sideEffects || '';
        if (editModalEl) editModalEl.classList.remove('hidden');
    }

    updateMedication() {
        const editIdEl = document.getElementById('editMedicationId');
        const editNameEl = document.getElementById('editMedicationName');
        const editDoseEl = document.getElementById('editMedicationDose');
        const editInstructionsEl = document.getElementById('editMedicationInstructions');
        const editSideEffectsEl = document.getElementById('editMedicationSideEffects');

        if (!editIdEl || !editNameEl || !editDoseEl || !editInstructionsEl) return;

        const id = parseInt(editIdEl.value);
        const name = editNameEl.value.trim();
        const dose = editDoseEl.value.trim();
        const instructions = editInstructionsEl.value;
        const sideEffects = editSideEffectsEl ? editSideEffectsEl.value.trim() : '';

        if (!name || !dose) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        const medication = this.medications.find(med => med.id === id);
        if (medication) {
            medication.name = name;
            medication.dose = dose;
            medication.instructions = instructions;
            medication.sideEffects = sideEffects;
            
            this.saveData();
            this.renderMedications();
            this.hideEditModal();
            
            this.showNotification('Medication updated successfully!', 'success');
        }
    }

    hideEditModal() {
        const editModal = document.getElementById('editModal');
        if (editModal) {
            editModal.classList.add('hidden');
        }
    }

    deleteMedication(id) {
        if (confirm('Are you sure you want to delete this medication?')) {
            this.medications = this.medications.filter(med => med.id !== id);
            
            // Clear any scheduled notifications for this medication
            if (this.notifications.has(id)) {
                clearTimeout(this.notifications.get(id));
                this.notifications.delete(id);
            }
            
            this.saveData();
            this.renderMedications();
            this.renderMissedDoses();
            
            this.showNotification('Medication deleted successfully!', 'success');
        }
    }

    // Rendering
    renderMedications() {
        const grid = document.getElementById('medicationsGrid');
        if (!grid) return;
        
        if (this.medications.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">💊</div>
                    <p>No medications added yet. Click "Add Medication" to get started.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.medications.map(medication => {
            const nextDose = new Date(medication.nextDose);
            const now = new Date();
            const isOverdue = nextDose < now;
            const timeUntilDose = this.getTimeUntilDose(nextDose);
            const hasSideEffects = medication.sideEffects && medication.sideEffects.trim();
            
            return `
                <div class="card medication-card">
                    <div class="card__body">
                        <div class="medication-header">
                            <div>
                                <h3 class="medication-name">${medication.name}</h3>
                                <p class="medication-dose">${medication.dose}</p>
                            </div>
                            <div class="medication-actions">
                                <button class="action-btn edit-btn" onclick="window.app.editMedication(${medication.id})">Edit</button>
                                <button class="action-btn delete-btn" onclick="window.app.deleteMedication(${medication.id})">Delete</button>
                            </div>
                        </div>
                        
                        <div class="medication-details">
                            <div class="detail-row">
                                <span class="detail-label">Instructions:</span>
                                <span class="detail-value">${medication.instructions}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Schedule:</span>
                                <span class="detail-value">${this.getScheduleDisplay(medication)}</span>
                            </div>
                        </div>
                        
                        ${hasSideEffects ? `
                            <div class="side-effects-display">
                                <div class="side-effects-label">
                                    <span class="warning-icon">⚠️</span>
                                    Side Effects
                                </div>
                                <div class="side-effects-text" onclick="window.app.showSideEffectsModal(${JSON.stringify(medication).replace(/"/g, '&quot;')})">
                                    ${medication.sideEffects.length > 50 ? 
                                        medication.sideEffects.substring(0, 50) + '... (click for details)' : 
                                        medication.sideEffects}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="next-dose ${isOverdue ? 'overdue' : ''}">
                            <div class="next-dose-label">${isOverdue ? 'OVERDUE' : 'NEXT DOSE'}</div>
                            <div class="next-dose-time">${timeUntilDose}</div>
                        </div>
                        
                        <div class="medication-card-actions">
                            <button class="take-btn" onclick="window.app.markAsTaken(${medication.id})">
                                Mark as Taken
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getScheduleDisplay(medication) {
        const { scheduleType, times } = medication;
        
        switch (scheduleType) {
            case 'daily':
                return `Daily at ${times[0]}`;
            case 'twice-daily':
                return `Twice daily at ${times.join(' and ')}`;
            case 'every-x-hours':
                const interval = times.length > 1 ? 24 / times.length : 24;
                return `Every ${interval} hours`;
            case 'weekly':
                const [day, time] = times[0].split(':');
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                return `Weekly on ${days[parseInt(day)]} at ${time}`;
            default:
                return 'Custom schedule';
        }
    }

    getTimeUntilDose(doseTime) {
        const now = new Date();
        const diff = doseTime - now;
        
        if (diff < 0) {
            const overdue = Math.abs(diff);
            const hours = Math.floor(overdue / (1000 * 60 * 60));
            const minutes = Math.floor((overdue % (1000 * 60 * 60)) / (1000 * 60));
            
            if (hours > 0) {
                return `${hours}h ${minutes}m overdue`;
            }
            return `${minutes}m overdue`;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 24) {
            const days = Math.floor(hours / 24);
            return `${days}d ${hours % 24}h`;
        }
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        
        return `${minutes}m`;
    }

    renderMissedDoses() {
        const container = document.getElementById('missedDosesList');
        if (!container) return;
        
        const allMissedDoses = [];
        
        this.medications.forEach(medication => {
            medication.missedDoses.forEach(missedDose => {
                allMissedDoses.push({
                    ...missedDose,
                    medicationName: medication.name,
                    medicationId: medication.id
                });
            });
        });
        
        if (allMissedDoses.length === 0) {
            container.innerHTML = `
                <div class="no-missed-doses">
                    <p>No missed doses yet. Great job staying on track! 🎉</p>
                </div>
            `;
            return;
        }
        
        // Sort by most recent first
        allMissedDoses.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        container.innerHTML = allMissedDoses.map(dose => {
            const missedTime = new Date(dose.timestamp);
            const timeString = missedTime.toLocaleString();
            
            return `
                <div class="missed-dose-item">
                    <div class="missed-dose-info">
                        <div class="missed-dose-medication">${dose.medicationName}</div>
                        <div class="missed-dose-time">Missed on ${timeString}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Notification Management
    async requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    this.showNotification('Notification permissions granted!', 'success');
                }
            }
        }
    }

    scheduleAllMedications() {
        this.medications.forEach(medication => {
            if (medication.active) {
                this.scheduleMedication(medication);
            }
        });
    }

    scheduleMedication(medication) {
        const nextDose = new Date(medication.nextDose);
        const now = new Date();
        const timeUntilDose = nextDose - now;
        
        if (timeUntilDose <= 0) {
            // Dose is overdue, show notification immediately
            this.showMedicationNotification(medication);
            return;
        }
        
        // Clear existing notification for this medication
        if (this.notifications.has(medication.id)) {
            clearTimeout(this.notifications.get(medication.id));
        }
        
        // Schedule new notification
        const timeoutId = setTimeout(() => {
            this.showMedicationNotification(medication);
        }, timeUntilDose);
        
        this.notifications.set(medication.id, timeoutId);
    }

    showMedicationNotification(medication) {
        // Update next dose time
        const nextDose = this.getNextDoseTime(medication.scheduleType, medication.times);
        medication.nextDose = nextDose;
        this.saveData();
        this.renderMedications();
        
        // Show browser notification
        if (Notification.permission === 'granted') {
            const notification = new Notification(`Time for ${medication.name}`, {
                body: `${medication.dose} - ${medication.instructions}`,
                icon: '💊',
                tag: `medication-${medication.id}`,
                requireInteraction: true
            });
            
            notification.onclick = () => {
                window.focus();
                this.showNotificationModal(medication);
                notification.close();
            };
        }
        
        // Show in-app notification modal
        this.showNotificationModal(medication);
        
        // Schedule next dose
        setTimeout(() => {
            this.scheduleMedication(medication);
        }, 1000);
    }

    showNotificationModal(medication) {
        this.currentNotification = medication;
        
        const content = document.getElementById('notificationContent');
        const modal = document.getElementById('notificationModal');
        
        if (content) {
            content.innerHTML = `
                <div class="notification-medication">${medication.name}</div>
                <div class="notification-dose">${medication.dose}</div>
                <div class="notification-instructions">${medication.instructions}</div>
            `;
        }
        
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    snoozeNotification(minutes) {
        if (!this.currentNotification) return;
        
        const snoozeTime = new Date();
        snoozeTime.setMinutes(snoozeTime.getMinutes() + minutes);
        
        // Update medication's next dose to snooze time
        const medication = this.medications.find(med => med.id === this.currentNotification.id);
        if (medication) {
            medication.nextDose = snoozeTime.toISOString();
            this.saveData();
            this.renderMedications();
            this.scheduleMedication(medication);
        }
        
        const modal = document.getElementById('notificationModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentNotification = null;
        
        this.showNotification(`Snoozed for ${minutes} minutes`, 'info');
    }

    markAsTaken(medicationId = null) {
        const id = medicationId || this.currentNotification?.id;
        if (!id) return;
        
        const medication = this.medications.find(med => med.id === id);
        if (!medication) return;
        
        // Update next dose time
        medication.nextDose = this.getNextDoseTime(medication.scheduleType, medication.times);
        this.saveData();
        this.renderMedications();
        this.scheduleMedication(medication);
        
        if (this.currentNotification) {
            const modal = document.getElementById('notificationModal');
            if (modal) {
                modal.classList.add('hidden');
            }
            this.currentNotification = null;
        }
        
        this.showNotification('Dose marked as taken!', 'success');
    }

    markAsMissed() {
        if (!this.currentNotification) return;
        
        const medication = this.medications.find(med => med.id === this.currentNotification.id);
        if (!medication) return;
        
        // Add to missed doses
        medication.missedDoses.push({
            timestamp: new Date().toISOString(),
            scheduledTime: medication.nextDose
        });
        
        // Update next dose time
        medication.nextDose = this.getNextDoseTime(medication.scheduleType, medication.times);
        
        this.saveData();
        this.renderMedications();
        this.renderMissedDoses();
        this.scheduleMedication(medication);
        
        const modal = document.getElementById('notificationModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentNotification = null;
        
        this.showNotification('Dose marked as missed', 'warning');
    }

    checkMissedDoses() {
        const now = new Date();
        let hasChanges = false;
        
        this.medications.forEach(medication => {
            const nextDose = new Date(medication.nextDose);
            const timeDiff = now - nextDose;
            
            // If dose is more than 30 minutes overdue and not already marked as missed
            if (timeDiff > 30 * 60 * 1000) {
                const lastMissed = medication.missedDoses[medication.missedDoses.length - 1];
                const alreadyMissed = lastMissed && 
                    Math.abs(new Date(lastMissed.scheduledTime) - nextDose) < 60000;
                
                if (!alreadyMissed) {
                    medication.missedDoses.push({
                        timestamp: new Date().toISOString(),
                        scheduledTime: medication.nextDose
                    });
                    
                    // Update to next scheduled dose
                    medication.nextDose = this.getNextDoseTime(medication.scheduleType, medication.times);
                    hasChanges = true;
                }
            }
        });
        
        if (hasChanges) {
            this.saveData();
            this.renderMedications();
            this.renderMissedDoses();
        }
    }

    showNotification(message, type = 'info') {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = `status status--${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            padding: 12px 16px;
            border-radius: 8px;
            font-weight: 500;
            animation: slideInRight 0.3s ease-out;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MedicationReminderApp();
});