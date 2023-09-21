document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const sectionHero = document.querySelector('.hero');
    const sectionHeroBg = document.querySelector('.hero-bg');
    const sectionAboutVR = document.querySelector('.about-vr');
    const sectionAboutConsoles = document.querySelector('.about-consoles');
    const sectionPricing = document.querySelector('.pricing');
    const footer = document.querySelector('.footer');

    if (header && sectionHero) {
        function addRelevantPaddingToSectionHero() {
            const headerHeightIncludingMarinTop = (header.offsetHeight) + 10;
            const sectionHeroHeightIncludingMarginTop = (sectionHero.offsetHeight) + 50;
            const changingClientHeight = document.documentElement.clientHeight;

            if (sectionHeroHeightIncludingMarginTop + headerHeightIncludingMarinTop < changingClientHeight) {
                const sectionHeroPaddingToAdd = changingClientHeight - (sectionHeroHeightIncludingMarginTop + headerHeightIncludingMarinTop);
                sectionHero.style.paddingBottom = `${sectionHeroPaddingToAdd}px`;
            } else {
                sectionHero.style.paddingBottom = '30px';
            }
        }
        addRelevantPaddingToSectionHero();
    }

    if (header && sectionHero && sectionHeroBg) {
        function changeSectionHeroBgHeight() {
            const headerHeightIncludingMarinTop = (header.offsetHeight) + 10;
            const sectionHeroHeightIncludingMarginTop = (sectionHero.offsetHeight) + 50;
            const changingClientHeight = document.documentElement.clientHeight;

            if ((headerHeightIncludingMarinTop + sectionHeroHeightIncludingMarginTop) > changingClientHeight) {
                const headerHeightIncludingMarinTop = (header.offsetHeight) + 10;
                const sectionHeroHeightIncludingMarginTop = (sectionHero.offsetHeight) + 50;
                sectionHeroBg.style.height = `${headerHeightIncludingMarinTop + sectionHeroHeightIncludingMarginTop}px`;
            }
        }
        changeSectionHeroBgHeight();
    }

    if (sectionAboutVR) {
        function addRelevantPaddingToSectionAboutVR() {
            const sectionAboutVRWrapper = sectionAboutVR.querySelector('.about-vr__wrapper');
            const changingClientHeight = document.documentElement.clientHeight;

            if (sectionAboutVRWrapper.offsetHeight < changingClientHeight) {
                const sectionAboutVRWrapper = sectionAboutVR.querySelector('.about-vr__wrapper');
                const sectionAboutVRWrapperHeight = sectionAboutVRWrapper.offsetHeight;
                const sectionAboutVRPaddingToAdd = Math.round((changingClientHeight - sectionAboutVRWrapperHeight) / 2);
                sectionAboutVR.style.padding = `${sectionAboutVRPaddingToAdd}px 0`;
            } else {
                sectionAboutVR.style.padding = '30px 0';
            }
        }
        addRelevantPaddingToSectionAboutVR();
    }

    if (sectionAboutConsoles) {
        function addRelevantPaddingToSectionAboutConsoles() {
            const sectionAboutConsolesHeight = sectionAboutConsoles.offsetHeight;
            const changingClientHeight = document.documentElement.clientHeight;

            if (sectionAboutConsolesHeight < changingClientHeight) {
                const sectionAboutConsolesPaddingToAdd = Math.round((changingClientHeight - sectionAboutConsolesHeight) / 2);
                sectionAboutConsoles.style.padding = `${sectionAboutConsolesPaddingToAdd}px 0`;
            } else {
                sectionAboutConsoles.style.padding = '30px 0';
            }
        }
        addRelevantPaddingToSectionAboutConsoles();
    }

    if (sectionPricing && footer) {
        function addRelevantPaddingToSectionPricing() {
            const changingClientHeight = document.documentElement.clientHeight;
            const changingWindowWidth = window.innerWidth;
            const sectionPricingHeight = sectionPricing.offsetHeight;
            const footerHeight = footer.offsetHeight;
            const footerAndPricingHeight = sectionPricingHeight + footerHeight;
            
            if (changingClientHeight > footerAndPricingHeight) {
                const difference = changingClientHeight - footerAndPricingHeight;
                sectionPricing.style.padding = `${50 + difference}px 0 90px`;
            } else if (changingWindowWidth <= 700) {
                sectionPricing.style.padding = '50px 0';
            } else {
                sectionPricing.style.padding = '50px 0 90px';
            }
        }
        addRelevantPaddingToSectionPricing();
    }

    window.addEventListener('resize', () => {
        if (header && sectionHero) {
            addRelevantPaddingToSectionHero();
        }

        if (header && sectionHero && sectionHeroBg) {
            changeSectionHeroBgHeight();
        }

        if (sectionAboutVR) {
            addRelevantPaddingToSectionAboutVR();
        }

        if (sectionAboutConsoles) {
            addRelevantPaddingToSectionAboutConsoles();
        }

        if (sectionPricing && footer) {
            addRelevantPaddingToSectionPricing();
        }
    });

});