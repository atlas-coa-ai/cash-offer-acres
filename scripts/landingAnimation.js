
function initializeFaqs() {
    const faqdata = [
        { question: "How does the process work?", answer: "Our process is simple and straightforward. Start by filling out our online form or calling us directly. Within 24 hours, you’ll receive a no-obligation cash offer. If you accept, we’ll schedule a closing date that works for you. We handle all the paperwork and cover closing costs. You receive your cash payment, and we take care of the rest!" },
        { question: "What types of properties do you buy?", answer: "We buy all types of properties, including vacant land, inherited land, and houses. Whether your property is in good condition or needs repairs, we’re interested in purchasing it. Our goal is to provide a hassle-free selling experience, regardless of your property’s condition or location." },
        { question: "How quickly can I sell my property?", answer: "At Cash Offer Acres, we understand the importance of a quick sale. Our process is designed to be efficient and convenient. Once you accept our cash offer, we can close in as little as thirty days. We work on your timeline, ensuring a smooth and timely transaction." },
        { question: "Do I need to make repairs before selling?", answer: "No! You don’t need to make any repairs or updates to your property before selling to Cash Offer Acres. We buy properties in as-is condition, saving you time and money. You can sell your property quickly and easily without the hassle of costly repairs or renovations." },
        { question: "How much does it cost to sell my property to Cash Offer Acres?", answer: "Selling your property to Cash Offer Acres is completely free! There are no hidden fees or commissions involved in our process. We cover all closing costs, so you receive the full cash offer amount. Our goal is to provide a transparent and stress-free selling experience for our clients." },
        { question: "What if I have more questions?", answer: "If you have more questions about selling your property to Cash Offer Acres, we’re here to help! Contact us directly to speak with one of our knowledgeable representatives. We’re happy to provide additional information and address any concerns you may have. Let us help you sell your property quickly and easily!" },
        { question: "How do I get started?", answer: "Getting started is easy! Simply fill out our online form with basic information about your property. Within 24 hours, you’ll receive a no-obligation cash offer. If you prefer to speak with us directly, give us a call, and we’ll provide an instant cash offer over the phone. Don’t wait—start the selling process today with Cash Offer Acres!" },
        { question: "What areas do you serve?", answer: "We buy land and houses nationwide! No matter where your property is located, we’re interested in purchasing it. Our team has experience working with clients across the country, providing a seamless selling experience tailored to your unique needs. Sell your property quickly and easily with Cash Offer Acres!" },
        { question: "What if my property has liens or back taxes?", answer: "If your property has liens or back taxes, don’t worry! Cash Offer Acres can still purchase your property. We work with reputable title companies to clear any outstanding issues, ensuring a smooth and stress-free transaction. Let us help you sell your property quickly and easily, regardless of any liens or back taxes." },
        { question: "What if my property is in probate?", answer: "If your property is in probate, our team is here to help. We will assist you throughout the process to ensure all the necessary steps are taken. Once probate is settled, we can provide a quick, all-cash offer for your property." },
        { question: "What if my property is in foreclosure?", answer: "If your property is in foreclosure, Cash Offer Acres can help! We purchase properties facing foreclosure, providing a quick and easy solution for homeowners in distress. Our team can work with your lender to stop the foreclosure process and purchase your property before it’s too late. Don’t wait—contact us today to sell your property and avoid foreclosure!" },
        { question: "What if my property is damaged or uninhabitable?", answer: "If your property is damaged or uninhabitable, Cash Offer Acres can still purchase it. We buy properties in any condition, saving you time and money on costly repairs. Whether your property has fire damage, water damage, or structural issues, we’re interested in purchasing it. Sell your damaged property quickly and easily with Cash Offer Acres!" }
    ];

    const faqsContainer = document.getElementById('faqs-container');
    if (faqsContainer) {
        faqdata.map(function(item) {
            let article = document.createElement('article');
            article.className = "faq-item";
            const markup =
                '<div>' +
                '<div class="item-question">' +
                '<span class="question-text">' + item.question + '</span>' +
                '<span class="arrows-container">' +
                '<span class="expand">▼</span>' +
                '<span class="close">▲</span>' +
                '</span>' +
                '</div>' +
                '<div class="item-answer">' +
                '<span class="answer-text">' + item.answer + '</span>' +
                '</div>' +
                '</div>';
            article.innerHTML = markup;
            faqsContainer.append(article);
        });

        const itemQuestion = document.querySelectorAll('.item-question');
        itemQuestion.forEach(function(item) {
            item.addEventListener('click', function(e) {
                const parent = e.currentTarget.closest('.faq-item');
                if (parent) {
                    parent.classList.toggle('show-answer');
                }
            });
        });
    }
}

function getEssentialElements() {
    return {
        video: document.getElementById('landingvideo'),
        mainLogo: document.getElementById('mainLogo'),
        navLogoSlot: document.getElementById('navLogoSlot'),
        navbar: document.getElementById('navbar'),
        dimOverlay: document.querySelector('.dim-overlay'),
        introScreen: document.getElementById('intro'),
        staticBackdrop: document.getElementById('static-backdrop'),
        tagline: document.getElementById('tagline'),
        pageContent: document.getElementById('pageContent'),
    };
}

function initializeNavbarSizing() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const resizeObserver = new ResizeObserver(entries => {
            const navbarHeight = entries[0].contentRect.height;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
        });
        resizeObserver.observe(navbar);
    }
}

function lazyLoadSection(sectionId, callback) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.warn(`Section with ID "${sectionId}" not found. Skipping lazy load.`);
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px 500px 0px',
        threshold: 0
    });

    observer.observe(targetSection);
}

function loadChatbot() {
    const script1 = document.createElement('script');
    script1.type = "text/javascript";
    script1.innerHTML = `
        ( function( a , b , c , d , e , f , g ) { 
            c[d] = c[d] || function() { 
                (c[d].q = c[d].q || []).push(arguments); 
            }; 
            c[ '_lsAlias' ] = c[ d ]; 
            e = a.createElement(b); 
            e.type = 'text/javascript'; 
            e.async = true; 
            e.src = 'https://app.chatsupport.co/api/client/get/script/LS-07ee9691'; 
            f = function() { 
                g = a.getElementsByTagName(b)[0]; 
                g.parentNode.insertBefore( e , g ); 
            }; 
            // The original script uses a 'load' listener on 'window' which isn't necessary 
            // when injecting the script like this. We'll simply let the inner logic run.
            // However, to ensure it runs, we'll append it directly.
            f(); 
        } )( document , 'script' , window , '_ls' );
    `;
    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.innerHTML = `
        _ls( 'init' , { 'projectId' : 'LS-07ee9691' } );
    `;
    document.head.appendChild(script1);
    document.head.appendChild(script2);
}

function loadForm() {
    const container = document.getElementById('lead_form');
    if (!container || container.querySelector('iframe')) return;

    if (!window.MsgsFormEmbed && !document.querySelector('script[src*="form_embed.js"]')) {
        console.log("Stride script not found, delaying iframe creation...");
        return; 
    }

    const iframe = document.createElement('iframe');
    iframe.src = "https://link.stridecrm.co/widget/form/Htn5dYm5du1OnwwxqV9E";
    iframe.id = "inline-Htn5dYm5du1OnwwxqV9E";
    iframe.title = "Cashofferacres.com Form";
    iframe.style.width = "100%";
    iframe.style.height = "800px"; // Set a fixed height to stop the double scrollbar
    iframe.style.border = "none";
    iframe.style.borderRadius = "3px";
    iframe.setAttribute("data-form-id", "Htn5dYm5du1OnwwxqV9E");
    iframe.setAttribute("scrolling", "no");

    container.innerHTML = "";
    container.appendChild(iframe);
}

function fadeInAboveTheFold(elements, delay = 1600) {
    const {navbar, dimOverlay, pageContent} = elements;

    document.body.classList.remove('no-scroll');
    dimOverlay.classList.add('dim-in');
    navbar.classList.remove('hidden');

    setTimeout(() => {
        initializeNavbarSizing();
        pageContent.classList.remove('hidden');
        initializeFaqs();
        initializeVideoModals();
        initializeTestimonials();
        lazyLoadSection('contact', loadForm);
        loadChatbot();

        setTimeout(() => {
            if (!document.querySelector('script[src*="form_embed.js"]')) {
                const strideScript = document.createElement('script');
                strideScript.src = "https://link.stridecrm.co/js/form_embed.js";
                strideScript.type = "text/javascript";
                document.head.appendChild(strideScript);
                console.log("Background: Stride Script pre-loading");
            }

            setTimeout(() => {
                const contactContainer = document.getElementById('lead_form');
                if (contactContainer && contactContainer.innerHTML === "") {
                    console.log("Background: Triggering Form Iframe");
                    loadForm();
                }
            }, 500);

        }, 1000);

        const scrollSection = document.querySelectorAll(
            '#above-the-fold, #our-team, #process, #faq_acordian, #contact'
        );
        const allNavLinks = document.querySelectorAll('#nav-links a');

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    let targetId = entry.target.id;
                    if (targetId === 'above-the-fold') {
                        if (window.scrollY < 50) {
                            allNavLinks.forEach(link => link.classList.remove('active'));
                            return;
                        } else {
                            targetId = 'services-container';
                        }
                    }

                    const currentTargetId = (targetId === 'above-the-fold') ? 'services-container' : targetId;

                    allNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === targetId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        scrollSection.forEach(section => {
            observer.observe(section);
        });

        const navLinksA = document.querySelectorAll('#nav-links a')
        const hamburger = document.getElementById("hamburger-menu");
        const navLinks = document.getElementById("nav-links");
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle("open");
            });
            navLinksA.forEach(link => {
                link.addEventListener('click', (event) => { // Added event argument
                    navLinksA.forEach(a => a.classList.remove("active"));
                    event.currentTarget.classList.add("active");

                    if (navLinks.classList.contains('open')) {
                        navLinks.classList.remove('open');
                    }
                });
            });
        }
    }, 1600);
}

function startMainLogoAnimation(elements) {
    const { mainLogo, navLogoSlot, navbar, dimOverlay, introScreen, pageContent } = elements;

    if (!mainLogo || !navLogoSlot || !navbar || !dimOverlay || !introScreen || !pageContent) {
        console.error("One or more required elements not found for animation.")
        return;
    }

    const mainLogoRect = mainLogo.getBoundingClientRect();
    const navLogoRect = navLogoSlot.getBoundingClientRect();
    const mainLogoCenterX = mainLogoRect.left + mainLogoRect.width / 2;
    const mainLogoCenterY = mainLogoRect.top + mainLogoRect.height / 2;
    const navLogoCenterX = navLogoRect.left + navLogoRect.width / 2;
    const navLogoCenterY = navLogoRect.top + navLogoRect.height / 2;
    const navLogoScale = navLogoRect.width / mainLogoRect.width;
    const xTranslate = navLogoCenterX - mainLogoCenterX;
    const yTranslate = navLogoCenterY - mainLogoCenterY;

    mainLogo.style.setProperty('--x-translate', `${xTranslate}px`);
    mainLogo.style.setProperty('--y-translate', `${yTranslate}px`);
    mainLogo.style.setProperty('--nav-logo-scale', navLogoScale);

    mainLogo.classList.add('animation-intro');
    mainLogo.addEventListener('animationend', () => {
        introScreen.classList.add('intro-gone'); 
        mainLogo.classList.add('fade-out-main-logo');

        fadeInAboveTheFold(elements);
        
    }, { once: true });
}

function startBackgroundVideo(elements) {
    const { video, staticBackdrop } = elements;
    if (!video || !staticBackdrop) return;

    let videoRevealed = video.classList.contains('video-ready');
    const revealVideo = () => {
        if (videoRevealed) return;
        videoRevealed = true;
        video.classList.add('video-ready');
        staticBackdrop.classList.add('hidden');
    };

    video.addEventListener('playing', revealVideo, { once: true });
    video.addEventListener('canplay', () => {
        if (!video.paused) revealVideo();
    }, { once: true });

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !video.paused) {
        revealVideo();
    }

    video.play()
        .then(revealVideo)
        .catch(error => {
            console.warn("Video failed to play automatically", error);
        });
}

function startIntroSequence(elements) {
    const {tagline, introScreen, mainLogo, video, staticBackdrop} = elements;
    if (!tagline || !introScreen || !mainLogo || !video || !staticBackdrop) {
        console.error("Essential intro sequence element(s) missing.");
        return;
    }

    introScreen.classList.remove('hidden');
    video.classList.remove('hidden');
    tagline.classList.add('hide-caret');

    setTimeout(() => {
        tagline.classList.remove('hide-caret');
        tagline.classList.add('tagline-typing');
        tagline.addEventListener('animationend', (event) => {
            if (event.animationName === 'typing') {
                setTimeout(() => {
                    tagline.style.width = tagline.offsetWidth + 'px';
                    tagline.classList.add('fade-out');
                    startMainLogoAnimation(elements);
                }, 2000);
            }
        }, { once: true });
    }, 700);
}

function initailizeAnimationLogic(elements) {
    const {video, mainLogo, navLogoSlot, navbar, dimOverlay, pageContent, introScreen, staticBackdrop, tagline} = elements;

    if (!video || !mainLogo || !introScreen) {
        console.error("Missing essential animation elements. Fading in content.");
        if (video) video.classList.add('remove');
        if (dimOverlay) dimOverlay.classList.add('remove');
        fadeInAboveTheFold(elements);
        return;
    }

    startBackgroundVideo(elements);

    if (sessionStorage.getItem('animationPlayed')) {
        fadeInAboveTheFold(elements, 0);
        return;
    }

    sessionStorage.setItem('animationPlayed', 'true');

    const logoLoadPromise = new Promise(resolve => {
        if (mainLogo.complete) {
            resolve('logo loaded');
        } else {
            mainLogo.onload = () => resolve('logo loaded');
            mainLogo.onerror = () => resolve('logo failed to load');
        }
    });

    const logoTimeoutPromise = new Promise(resolve => setTimeout(() => resolve('logo timeout'), 1000));

    Promise.race([logoLoadPromise, logoTimeoutPromise])
        .then(result => {
            console.log(`Starting intro sequence after ${result}.`);
            startIntroSequence(elements);
        })
        .catch(error => {
            console.error("An error occured during loading:", error);
            video.classList.add('remove');
            dimOverlay.classList.add('remove');
            fadeInAboveTheFold(elements);
        });
}

function initializeVideoModals() {
    const modal = document.getElementById('video-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const videoPlaceholder = document.querySelector('.video-container');

    const videoWrappers = document.querySelectorAll('.video-thumbnail-wrapper');

    videoWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const playButton = wrapper.querySelector('.play-button-overlay');
            if (playButton) {
                const youtubeVideoId = playButton.dataset.videoId;
                if (youtubeVideoId) {
                    modal.classList.add('visible');
                    videoPlaceholder.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                }
            }
        })
    })
    
    // Close modal by clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('visible');
            videoPlaceholder.innerHTML = '';
        }
    });
}

function initializeTestimonials() {
    const testimonialLinks = document.querySelectorAll('#testimonial-names a');
    const testimonialContentDivs = document.querySelectorAll('#testimonial-content > div');
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonialContent = document.getElementById('testimonial-content');
    let cycleInterval;

    function adjustFontSize(element) {
        const pElement = element.querySelector('p');
        const maxHeight = testimonialContent.clientHeight;
        const maxWidth = testimonialContent.clientWidth;

        pElement.style.fontSize = '1.5rem'; 

        while (pElement.offsetHeight > maxHeight || pElement.offsetWidth > maxWidth) {
            const currentSize = parseFloat(getComputedStyle(pElement).fontSize);
            pElement.style.fontSize = `${currentSize - 0.5}px`;
        }
    }

    testimonialContentDivs.forEach(div => {
        if (!div.classList.contains('active')) {
            div.style.display = 'none';
        } else {
            adjustFontSize(div);
        }
    });

    function cycleTestimonials() {
        const currentActiveLink = document.querySelector('#testimonial-names a.active');
        const currentActiveContent = document.querySelector('#testimonial-content > div.active');
        
        if (currentActiveLink) currentActiveLink.classList.remove('active');
        if (currentActiveContent) currentActiveContent.classList.remove('active');
        
        let nextActiveLink = currentActiveLink ? currentActiveLink.parentElement.nextElementSibling : null;
        if (!nextActiveLink) {
            nextActiveLink = testimonialLinks[0].parentElement;
        }

        const nextLinkElement = nextActiveLink.querySelector('a');
        const targetId = nextLinkElement.getAttribute('href').replace(/^#/, '');
        const targetElement = document.getElementById(targetId);

        nextLinkElement.classList.add('active');
        targetElement.classList.add('active');

        testimonialContentDivs.forEach(div => div.style.display = 'none');
        targetElement.style.display = 'block';

        adjustFontSize(targetElement);
    }

    function startCycle() {
        cycleInterval = setInterval(cycleTestimonials, 5000);
    }

    function pauseCycle() {
        clearInterval(cycleInterval);
    }

    testimonialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            pauseCycle();

            testimonialLinks.forEach(link => {
                link.classList.remove('active');
            });
            testimonialContentDivs.forEach(div => {
                div.classList.remove('active');
                div.style.display = 'none';
            });

            event.target.classList.add('active');
            const targetId = event.target.getAttribute('href').replace(/^#/, '');
            const targetElement = document.getElementById(targetId);
            targetElement.classList.add('active');
            targetElement.style.display = 'block';

            adjustFontSize(targetElement);
            startCycle();
        });
    });

    testimonialsContainer.addEventListener('mouseover', pauseCycle);
    testimonialsContainer.addEventListener('mouseout', startCycle);

    startCycle();
}

const elements = getEssentialElements();
document.body.classList.add('no-scroll');
initailizeAnimationLogic(elements);
