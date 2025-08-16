         // Typewriter Effect for Hero Section
        const typewriterText = "Hi, I'm Hayat Ahmedjara";
        let i = 0;
        const typewriterElement = document.getElementById('typewriter');
        
        function typeWriter() {
            if (i < typewriterText.length) {
                typewriterElement.innerHTML += typewriterText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Add blinking cursor after typing is done
                typewriterElement.classList.add('typewriter');
            }
        }
        
        // Start typing effect when page loads
        window.onload = function() {
            setTimeout(typeWriter, 500);
        };

        // Floating Tech Icons Animation
        const techIcons = [
            { icon: "fab fa-python", size: "2rem", top: "20%", left: "15%" },
            { icon: "fab fa-react", size: "2.5rem", top: "30%", left: "80%" },
            { icon: "fab fa-node-js", size: "2.2rem", top: "70%", left: "10%" },
            { icon: "fas fa-brain", size: "1.8rem", top: "60%", left: "85%" },
            { icon: "fas fa-database", size: "1.5rem", top: "40%", left: "25%" },
            { icon: "fab fa-docker", size: "1.7rem", top: "50%", left: "75%" }
        ];

        function createFloatingTech() {
            const container = document.getElementById('floatingTech');
            
            techIcons.forEach((tech, index) => {
                const icon = document.createElement('i');
                icon.className = `tech-icon ${tech.icon}`;
                icon.style.fontSize = tech.size;
                icon.style.top = tech.top;
                icon.style.left = tech.left;
                icon.style.animationDelay = `${index * 0.5}s`;
                
                container.appendChild(icon);
            });
        }

        // Skills Data
        const skills = [
            { name: "Python", icon: "fab fa-python", level: 90 },
            { name: "TensorFlow", icon: "fas fa-brain", level: 85 },
            { name: "PyTorch", icon: "fas fa-project-diagram", level: 80 },
            { name: "React", icon: "fab fa-react", level: 88 },
            { name: "Node.js", icon: "fab fa-node-js", level: 85 },
            { name: "PostgreSQL", icon: "fas fa-database", level: 75 },
             { name: "SQL", icon: "fas fa-database", level: 80 },
            { name: "SQLite", icon: "fas fa-database", level: 75 },
            { name: "Laravel", icon: "fab fa-laravel", level: 70 },
            { name: "HTML", icon: "fab fa-html5", level: 90 },
            { name: "CSS", icon: "fab fa-css3-alt", level: 85 },
            { name: "JavaScript", icon: "fab fa-js", level: 80 },
            { name: "Bootstrap", icon: "fab fa-bootstrap", level: 75 },
            { name: "Tailwind CSS", icon: "fab fa-tailwindcss", level: 70 },
            { name: "Flask", icon: "fas fa-flask", level: 75 },
            { name: "Docker", icon: "fab fa-docker", level: 70 },
            { name: "Git", icon: "fab fa-git-alt", level: 80 },
            { name: "OpenCV", icon: "fas fa-eye", level: 75 },
            { name: "NestJS", icon: "fas fa-server", level: 78 },
            { name: "TypeScript", icon: "fas fa-code", level: 82 }
        ];

        // Render Skills
        function renderSkills() {
            const container = document.getElementById('skillsContainer');
            
            skills.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                skillCard.innerHTML = `
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <h3 class="skill-name">${skill.name}</h3>
                    <div class="skill-level">
                        <div class="skill-level-bar" style="width: ${skill.level}%"></div>
                    </div>
                `;
                container.appendChild(skillCard);
            });
        }

        // Projects Data (categorized)
        const projects = [
            {
                title: "Facial Recognition System",
                description: "Real-time facial recognition application that captures webcam images and performs recognition, reducing manual verification tasks by 40 hours/month.",
                image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                tags: ["Python", "OpenCV", "TensorFlow"],
                github: "https://github.com/Hayat373/facial-recognition-system",
                category: "ai"
            },
            {
                title: "Future Nest Time Capsule",
                description: "Full-stack web app allowing users to create and unlock time-locked messages, using React for the frontend and NestJS with PostgreSQL for the backend.",
                image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                tags: ["React", "NestJS", "PostgreSQL"],
                github: "https://github.com/Hayat373/futureNest",
                category: "fullstack"
            },
            {
                title: "Study Buddy AI",
                description: "AI-powered flashcard generator with face recognition login and real-time group chat for sharing flashcards.",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                tags: ["Python", "Laravel", "TensorFlow"],
                github: "https://github.com/Hayat373/Study_Buddy",
                category: "ai"
            },
            {
                title: "Portfolio Website",
                description: "Static personal portfolio website showcasing my skills and projects with responsive design.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                tags: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/Hayat373/hayat_ahmedjata_portifolio",
                category: "static"
            },
            {
                title: "E-commerce Platform",
                description: "Full-featured e-commerce platform with product management, cart functionality, and payment processing.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                tags: ["React", "Node.js", "SQL"],
                github: "#",
                category: "fullstack"
            }
        ];

        // Render Projects
        function renderProjects(filter = 'all') {
            const container = document.getElementById('projectsContainer');
            container.innerHTML = '';
            
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            filteredProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-image" style="background-image: url('${project.image}')">
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>View Code</span>
                            </a>
                        </div>
                    </div>
                `;
                container.appendChild(projectCard);
            });
        }

        // Project Tab Filtering
        document.querySelectorAll('.project-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                renderProjects(filter);
            });
        });

      

       // Updated Certificates Data with working image URLs
const certificates = [
    {
        title: "Cloud Basics Certification",
        issuer: "Cloud Computing Association",
        date: "August 2025",
         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "VEX Robotics Competition Certification",
        issuer: "Robotics Education & Competition Foundation",
        date: "March 2025",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Volunteering Certificate",
        issuer: "Community Service Organization",
        date: "Mach 2025",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
];

// Updated Render Certificates function
function renderCertificates() {
    const container = document.getElementById('certificatesContainer');
    container.innerHTML = ''; // Clear existing content
    
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';
        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image" 
                 onerror="this.src='https://via.placeholder.com/600x400?text=Certificate+Image'">
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-issuer">${cert.issuer}</p>
            <p class="certificate-date">${cert.date}</p>
        `;
        container.appendChild(certCard);
    });
}


        // AI Chatbot Functionality
        const chatbotBtn = document.getElementById('chatbotBtn');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatbotInput = document.getElementById('chatbotInput');
        const chatbotSend = document.getElementById('chatbotSend');

        // Sample bot responses
        const botResponses = [
            {
                keywords: ["hello", "hi", "hey"],
                responses: [
                    "Hello there! How can I help you today?",
                    "Hi! What would you like to know about Hayat's work?",
                    "Hey! Ask me anything about Hayat's skills or projects."
                ]
            },
            {
                keywords: ["skill", "technology", "tech"],
                responses: [
                    "Hayat has expertise in AI/ML technologies like Python, TensorFlow, and PyTorch, as well as full-stack development with React, Node.js, and more.",
                    "Some of Hayat's key skills include: Machine Learning, Computer Vision, Web Development, and Mobile App Development.",
                    "Hayat is proficient in both frontend (React, Flutter) and backend (Node.js, NestJS, Laravel) technologies."
                ]
            },
            {
                keywords: ["project", "work"],
                responses: [
                    "Hayat has worked on several interesting projects including a Facial Recognition System, Future Nest Time Capsule, and Study Buddy AI.",
                    "Check out the projects section to see Hayat's work on AI applications and full-stack web development.",
                    "Some notable projects include an AI-powered flashcard generator and a time-locked messaging app."
                ]
            },
            {
                keywords: ["contact", "email", "phone"],
                responses: [
                    "You can contact Hayat via email at hayahmam3@gmail.com or phone at +251 97 902 9750.",
                    "Check the contact section for all the ways to get in touch with Hayat.",
                    "Hayat is available on LinkedIn, GitHub, and via email. The contact information is in the contact section."
                ]
            },
            {
                keywords: ["thank", "thanks"],
                responses: [
                    "You're welcome! Let me know if you need anything else.",
                    "No problem! Happy to help.",
                    "Glad I could assist you!"
                ]
            },
            {
                keywords: ["default"],
                responses: [
                    "I'm not sure I understand. Could you rephrase that?",
                    "I'm still learning. Could you ask me something about Hayat's skills or projects?",
                    "I don't have an answer for that. Try asking about Hayat's technical skills or projects."
                ]
            }
        ];

        // Toggle chatbot window
        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
        });

        // Send message function
        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (message === '') return;

            // Add user message
            addMessage(message, 'user');
            chatbotInput.value = '';

            // Simulate typing
            setTimeout(() => {
                // Generate bot response
                const response = generateResponse(message);
                addMessage(response, 'bot');
            }, 500);
        }

        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.textContent = text;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        // Generate bot response
        function generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            for (const item of botResponses) {
                if (item.keywords.some(keyword => lowerMessage.includes(keyword))) {
                    return item.responses[Math.floor(Math.random() * item.responses.length)];
                }
            }
            
            // Default response if no keywords matched
            return botResponses.find(item => item.keywords.includes('default')).responses[0];
        }

        // Event listeners for chatbot
        chatbotSend.addEventListener('click', sendMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Sample conversation starter
        setTimeout(() => {
            addMessage("You can ask me about Hayat's skills, projects, or how to contact him.", 'bot');
        }, 2000);

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Create FormData object from the form
    const formData = new FormData(contactForm);

    // Send the form data to Web3Forms
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you! Your message has been sent.');
            contactForm.reset(); // Reset the form fields
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
});
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to section
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Highlight nav link based on scroll position
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });

        // Initialize everything when DOM loads
        document.addEventListener('DOMContentLoaded', function() {
            createFloatingTech();
            renderSkills();
            renderProjects();
            renderCertificates()
        });
   