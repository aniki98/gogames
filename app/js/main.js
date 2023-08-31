document.addEventListener('DOMContentLoaded', () => {

    const clientHeight = document.documentElement.clientHeight;

    function addRelevantPaddingToSectionHero() {
        const sectionHero = document.querySelector('.hero');
        const sectionHeroPaddingToAdd = clientHeight - 742;
        sectionHero.style.paddingBottom = `${sectionHeroPaddingToAdd}px`;
    }
    addRelevantPaddingToSectionHero();

    function addRelevantPaddingToSectionAboutVR(){
        const sectionAboutVR = document.querySelector('.about-vr');
        const sectionAboutVRHeight = sectionAboutVR.offsetHeight;
        const sectionAboutVRPaddingToAdd = (clientHeight - sectionAboutVRHeight) / 2;
        sectionAboutVR.style.padding = `${sectionAboutVRPaddingToAdd}px 0`;
    }
    addRelevantPaddingToSectionAboutVR();

    function addRelevantPaddingToSectionAboutConsoles(){
        const sectionAboutConsoles = document.querySelector('.about-consoles');
        const sectionAboutConsolesHeight = sectionAboutConsoles.offsetHeight;
        const sectionAboutConsolesPaddingToAdd = (clientHeight - sectionAboutConsolesHeight) / 2;
        sectionAboutConsoles.style.padding = `${sectionAboutConsolesPaddingToAdd}px 0`;
    }
    addRelevantPaddingToSectionAboutConsoles();

    function addRelevantPaddingToSectionPricing(){
        const sectionPricing = document.querySelector('.pricing');
        const footer = document.querySelector('.footer');
        const sectionPricingHeight = sectionPricing.offsetHeight;
        const footerHeight = footer.offsetHeight;
        const footerAndPricingHeight = sectionPricingHeight + footerHeight;
        if (clientHeight > footerAndPricingHeight){
            const difference = clientHeight - footerAndPricingHeight;
            sectionPricing.style.padding = `${50 + difference}px 0 90px`;
        }
    }
    addRelevantPaddingToSectionPricing();

    window.addEventListener('resize', () => {
        addRelevantPaddingToSectionHero();
        addRelevantPaddingToSectionAboutVR();
        addRelevantPaddingToSectionAboutConsoles();
        addRelevantPaddingToSectionPricing()
    });

});