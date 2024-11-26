document.addEventListener('DOMContentLoaded', () => {
    // Skills Data
    const skillsData = [
        { 
            icon: 'fab fa-python', 
            title: 'Python', 
            description: '4 years of experience. Developed various tools and certified in Python.' 
        },
        { 
            icon: 'fab fa-linux', 
            title: 'Linux', 
            description: 'Linux system admin with extensive server management experience.' 
        },
        { 
            icon: 'fa-server', 
            title: 'Webservers', 
            description: 'Over 3 years managing multiple high-traffic websites.' 
        },
        { 
            icon: 'fa-cloud', 
            title: 'Cloud Hosting', 
            description: 'Skilled in deploying applications on cloud platforms for optimized performance.' 
        },
        { 
            icon: 'fa-server', 
            title: 'Sysadmin', 
            description: 'Expertise in system administration, ensuring server stability and security.' 
        }
        
        // Add more skills as needed
    ];

    // Projects Data
    const projectsData = [
        {
            title: 'AyuFiles',
            description: 'Web Application for uploading files and viewing information about uploaded files.',
            githubLink: 'https://github.com/yourusername/AyuFiles'
        },
        {
            title: 'Ayu Image - AI Image Generator',
            description: "Ayu Image is a simple program that uses OpenAI's API to generate images.",
            githubLink: 'https://github.com/yourusername/Ayu-Image'
        },
        {
            title: 'Whatsapp-Nodemcu',
            description: 'This project allows you to send WhatsApp messages using a NodeMCU ESP8266 board and the Ultramsg API. The NodeMCU hosts a web server where users can input a phone number and message, and the ESP8266 will send the WhatsApp message using the Ultramsg service.',
            githubLink: 'https://github.com/yourusername/Whatsapp-Nodemcu'
        },
        {
            title: 'Personal Portfolio Website',
            description: 'Responsive personal portfolio website showcasing skills and projects',
            // image: 'path/to/portfolio-image.jpg',
            githubLink: 'https://github.com/yourusername/portfolio'
        }
        
        // Add more projects as needed
    ];

    // Certifications Data
    const certificationsData = [
        {
            title: 'Python Certification - IIIT Allahabad',
            description: "Certified in Python Programming from IIIT Allahabad, demonstrating proficiency in Python's core concepts, including data structures, algorithms, object-oriented programming, and libraries. This certification reflects a strong foundation in writing efficient, clean, and scalable Python code, as well as practical experience in real-world problem-solving using Python.",
            path: 'python.pdf'
        },
        {
            title: 'IT Basics - Programming Hub (Google)',
            description: 'Certified in IT Basics, demonstrating a strong foundation in essential computer concepts, hardware, software, and networking. This certification covers core IT knowledge, including operating systems, cybersecurity fundamentals, basic troubleshooting, and the use of key productivity software. Equipped with practical skills to manage computer systems efficiently and effectively in various environments.',
            path: 'itbasic.pdf'
        }
        // Add more certifications as needed
    ];

    // Function to populate skills section
    function populateSkills() {
        const skillsContainer = document.querySelector('#skills .card-container');
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'card';
            skillCard.innerHTML = `
                <i class="skill-icon fa ${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }

    // Function to populate projects section
    function populateProjects() {
        const projectsContainer = document.querySelector('#projects .card-container');
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.githubLink}" class="project-link" target="_blank">View on GitHub</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Function to populate certifications section
    function populateCertifications() {
        const certsContainer = document.querySelector('#certifications .card-container');
        certificationsData.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'card';
            certCard.innerHTML = `
            <i class="fas fa-certificate skill-icon"></i>
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
                <button class="btn" onclick="openModal('${cert.path}')">View Certificate</button>
            `;
            certsContainer.appendChild(certCard);
        });
    }

    // Populate all sections
    populateSkills();
    populateProjects();
    populateCertifications();

    // Modal functionality
    const modal = document.getElementById('pdfModal');
    const closeModalBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.project-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            modal.classList.add('show');
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Optional: Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});