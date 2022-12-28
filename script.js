// Get buttons that contain dropdown

const featuresBtn = document.getElementById('features');
const companyBtn = document.getElementById('company');

// Get dropdown content
const featuresContent = document.getElementById('features-content');
const companyContent = document.getElementById('company-content')


// Control when dropdown content from Feature button will be displayed
const collapseFeaturesContent = () => {
    console.log('features');

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


// Event listener for Feature button
featuresBtn.addEventListener('click', () => {
    collapseFeaturesContent();  
});

// Event listener for Company button
companyBtn.addEventListener('click', () => {
    collapseCompanyContent();
 });

