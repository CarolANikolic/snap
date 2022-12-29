// Get open menu button for vertical dropdown and all menu vertical section
const menu = document.getElementById('open-vertical-menu');
const verticalDropdown = document.getElementById('collapsible-menu');

// Get buttons that contain dropdown
const featuresBtn = document.getElementById('features');
const companyBtn = document.getElementById('company');

// Get dropdown content
const featuresContent = document.getElementById('features-content');
const companyContent = document.getElementById('company-content');


// Change button background image for vertical menu
const changeImageVerticalBtn = () => {
    if(verticalDropdown.style.display == "none") {
        //Open vertical menu 
        verticalDropdown.style.display = "block";

        //Change background image to  close icon menu
        menu.style.backgroundImage = "url('assets/images/icon-close-menu.svg')";
    } else {
        //Close vertical menu 
        verticalDropdown.style.display = "none";
        
        //Change background image to open icon menu
        menu.style.backgroundImage = "url('assets/images/icon-menu.svg')";
    }    
}


// Control when dropdown content from Feature button will be displayed
const collapseFeaturesContent = () => {

    if(featuresContent.style.display == 'block') {
        featuresContent.style.display = 'none';
        
        // Change arrow icon in Company button 
        featuresBtn.style.backgroundImage = "url('assets/images/icon-arrow-down.svg')";

    } else  {
        featuresContent.style.display = 'block';

        // Change arrow icon in Company button 
        featuresBtn.style.backgroundImage = "url('assets/images/icon-arrow-up.svg')";
    } 
}


// Control when dropdown content from Company button will be displayed
const collapseCompanyContent = () => {
  
    if(companyContent.style.display == 'block') {
        companyContent.style.display = 'none';

        // Change arrow icon in Company button 
        companyBtn.style.backgroundImage = "url('assets/images/icon-arrow-down.svg')";
    } else  {
        companyContent.style.display = 'block';

        // Change arrow icon in Company button 
        companyBtn.style.backgroundImage = "url('assets/images/icon-arrow-up.svg')";
    }  
}

 // Event listener for Menu button
 menu.addEventListener('click', () => {
    changeImageVerticalBtn();
 });

// Event listener for Feature button
featuresBtn.addEventListener('click', () => {
    collapseFeaturesContent();  
});

// Event listener for Company button
companyBtn.addEventListener('click', () => {
    collapseCompanyContent();
 });