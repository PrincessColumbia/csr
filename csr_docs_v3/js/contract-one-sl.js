// JavaScript Document


/* This is a set of sample data for testing purposes. Fix all this once the pages have a data source */

// Meta information
divNum = "840";
classId = "HOA";
propertyName = "Belle Pointe"; //ONLY REQUIRED IF THE GEO HAS A PROPERTY NAME
muniId = "City of "; //Change to "Village of ", "County of " as appropriate | ONLY REQUIRED IF THIS IS A MUNI DOC
municipalityName = "Nashville";
stateId = "TN";
lawsonNum = "4840";
pricingId = "HOA";

// Contact, contract, and account information
websiteUrl = ""; //Leave empty if no website | MUST include "http://" at the beginning ("https://" as appropriate) - example: "http://www.google.com"
websiteVisibleText = "";  //Title of the destination website. If none (or none visible/found, use the bare website domain name, example - "www.google.com")
contactTitle = "Property Manager"; //SHOULD NEVER BE A PERSON'S NAME, if you see a person's name, contact the SME
contactPhone = "615-775-9050";
contractNumber = "";  //Leave blank if N/A or "Does not apply"
contractGroup = "";  //Leave blank if N/A or "Does not apply"
contractNotes = "Resident must contact the Property Manager to set up their initial service";  //Leave blank if N/A or "No special contract notes"
summaryRoutedAccountNumber = "840/0020279";  //Leave blank if N/A or "Individually routed account"
siteServicedByCity = "Nashville, TN";  //SHOULD NEVER BE BLANK OR N/A
siteCollectionHours = "All services: 6:00 am - 4:00 pm (CST)";  //SHOULD NEVER BE BLANK OR N/A
promotionsData = "";  //Leave blank if N/A or "No promotions at this time"


// Solid Waste Service (Trash) Information
// Any fields with 'N/A' should be left blank/empty
offeredSws = "Yes"; //Use only "Yes" or "No" to indicate if the service is offered.
swsType = "Cart Service"; //Should never be empty unless service not offered
swRate = "";
swServiceLevel = "Cart content only";
swContainer = "1 - 95 gal / Cart / RS Blue";
swContainerDeliveredBy = "RS";
swServiceDay = "Monday"; // If a day isn't entered, defaults to "Verify service day using Maps" with link
swServiceFrequency = "1 pick up per week";
swAdditionalContainerRate = "Refer Resident to the Property Manager to add additional containers";
swAdditionalContainerDetails = "";
swAdditionalContainerDelivered = "";
swNotes = "Curbside";

// Recycle Information
// Any fields with 'N/A' should be left blank/empty

offeredRec = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
recType = ""; //Should never be empty unless service not offered
recRate = "";
recServiceLevel = "";
recContainer = "";
recContainerDeliveredBy = "";
recServiceDay = ""; // If a day isn't entered, defaults to "Verify service day using Maps" with link
recServiceFrequency = "";
recAdditionalContainerRate = "";
recAdditionalContainerDetails = "";
recAdditionalContainerDelivered = "";
recNotes = "";

// Yard Waste Information
// Any fields with 'N/A' should be left blank/empty

offeredYW = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
ywType = ""; //Should never be empty unless service not offered
ywRate = "";
ywServiceLevel = "";
ywContainer = "";
ywContainerDeliveredBy = "";
ywServiceDay = ""; // If a day isn't entered, defaults to "Verify service day using Maps" with link
ywServiceFrequency = "";
ywAdditionalContainerRate = "";
ywAdditionalContainerDetails = "";
ywAdditionalContainerDelivered = "";
ywNotes = "";

// Fees

feesDelivery = "No Charge to Resident";
feesRemoval = "Leave container on site for the next Resident";
feesFrf = "";
feesErf = "";
feesAdmin = "";
feesReinstatement = "";
feesInterupt = "";
feesLatefee = "";
feesContainerReplacement = "<strong>Exchange</strong>: $38.50<br><strong>Replacement</strong>: $50.00";
feesOther = "";

// Information

infoCartColors = "";
infoContainerReplacement = "RS will replace as needed";
infoContainerPickup = "";
infoCSA = "";
infoWalkIn = "Yes (no cash accepted)";

// Appliances

offeredApp = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
appRate = "";
appLimit = "";
appServiced = "";
appServiceDay = ""; // If a day isn't entered, defaults to "Verify service day using Maps" with link
appServiceFrequency = "";
appNotes = "";


// Bulk

offeredBulk = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
bulkRate = "";
bulkLimit = "";
bulkServiced = "";
bulkServiceDay = ""; // If a day isn't entered, defaults to "Verify service day using Maps" with link
bulkServiceFrequency = "";
bulkNotes = "";

/*

// Construction Debris

offeredCon = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
conRate = "";
conLimit = "";
conNotes = "";

// Electronic Waste

offeredEwaste = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
ewasteRate = "";
ewasteLimit = "";
ewasteNotes = "";

// Extra Pick-up

offeredExtraPickUp = "No"; //Use only "Yes" or "No" to indicate if the service is offered.
extraPickUpScheduled = "";
extraPickUpUnscheduled = "";
*/

/* End sample data */

//====================================================================

/* Link Builder */

// Meta
var linkPrefix = "DIV_";
var linkPostfix = ".html";

// Site Information and Solid Waste Districts
var siSWD = "_Site_Information_Solid_Waste_Districts";
var divSiteInfo = "#DSI";
var divOffsite = "#offsite";
var sWDistricts = "#SWD";

// Site Information - Offsite link
var siteInformationSwd = linkPrefix + divNum + siSWD + linkPostfix + divOffsite;

// Site Information - Division Site Info link
var siteInformationSwd = linkPrefix + divNum + siSWD + linkPostfix + divSiteInfo;

// Site Information - Solid Waste Districts link
var siteInformationSwd = linkPrefix + divNum + siSWD + linkPostfix + sWDistricts;

// Disposal Notes
var dispNotes = "_Disposal_Notes";
var anchorLandfill = "#Landfill";
var anchorRec = "#Recycle";
var anchorYw = "#YardWaste";
var anchorApp = "#Appliance";
//var anchorBulk = "#Bulk";
//var anchorConstruction = "#Construction";
//var anchorEwaste = "#Ewaste";
//var anchorMedical = "#Medical";
//var anchorSharps = "#Sharps";



/*
// Disposal Notes - Appliance link
var dispNotesLinkApp = linkPrefix + divNum + dispNotes + linkPostfix + anchorApp;

if (offeredApp === "Yes") {
	document.getElementById("app-disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("app-disposal-landfill").target = "_blank";
	document.getElementById("app-disposal-landfill").innerHTML = "Disposal Notes - Appliance Notes";
} else {
	document.getElementById("app-disposal-landfill").href = siteInformationSwd;
	document.getElementById("app-disposal-landfill").target = "_blank";
	document.getElementById("app-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/



/*
// Disposal Notes - Bulk link
var dispNotesLinkBulk = linkPrefix + divNum + dispNotes + linkPostfix + anchorBulk;

if (offeredBulk === "Yes") {
	document.getElementById("bulk-disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("bulk-disposal-landfill").target = "_blank";
	document.getElementById("bulk-disposal-landfill").innerHTML = "Disposal Notes - Bulk Notes";
} else {
	document.getElementById("bulk-disposal-landfill").href = siteInformationSwd;
	document.getElementById("bulk-disposal-landfill").target = "_blank";
	document.getElementById("bulk-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/



/*
// Disposal Notes - Construction link
var dispNotesLinkCon = linkPrefix + divNum + dispNotes + linkPostfix + anchorConstruction;

if (offeredCon === "Yes") {
	document.getElementById("con-disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("con-disposal-landfill").target = "_blank";
	document.getElementById("con-disposal-landfill").innerHTML = "Disposal Notes - Construction Notes";
} else {
	document.getElementById("con-disposal-landfill").href = siteInformationSwd;
	document.getElementById("con-disposal-landfill").target = "_blank";
	document.getElementById("con-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/



/*
// Disposal Notes - Electronics Recycling link
var dispNotesLinkEwaste = linkPrefix + divNum + dispNotes + linkPostfix + anchorEwaste;

if (offeredEwaste === "Yes") {
	document.getElementById("ewaste-disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("ewaste-disposal-landfill").target = "_blank";
	document.getElementById("ewaste-disposal-landfill").innerHTML = "Disposal Notes - Electronics Recycling Notes";
} else {
	document.getElementById("ewaste-disposal-landfill").href = siteInformationSwd;
	document.getElementById("ewaste-disposal-landfill").target = "_blank";
	document.getElementById("ewaste-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/


/* NOTE TO TEAM - THE FOLLOWING LINKS ARE NEVER REFERENCED IN THE CONTRACT DOCUMENTS. THIS SECTION IS FOR POTENTIAL FUTURE USE. */

/*
// Disposal Notes - Medical Waste link
var dispNotesLinkMedical = linkPrefix + divNum + dispNotes + linkPostfix + anchorMedical;

if (offeredMed === "Yes") {
	document.getElementById("disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("disposal-landfill").target = "_blank";
	document.getElementById("disposal-landfill").innerHTML = "Disposal Notes - Medication Disposal Notes";
} else {
	document.getElementById("disposal-landfill").href = siteInformationSwd;
	document.getElementById("disposal-landfill").target = "_blank";
	document.getElementById("disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/


/*
// Disposal Notes - Sharps link
var dispNotesLinkSharps = linkPrefix + divNum + dispNotes + linkPostfix + anchorSharps;

if (offeredSharp === "Yes") {
	document.getElementById("disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("disposal-landfill").target = "_blank";
	document.getElementById("disposal-landfill").innerHTML = "Disposal Notes - Sharps Disposal Notes";
} else {
	document.getElementById("disposal-landfill").href = siteInformationSwd;
	document.getElementById("disposal-landfill").target = "_blank";
	document.getElementById("disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}
*/
/* End unused links section */




//====================================================================

/* HEADER AND METADATA */

// Document Title
var docCompiledTitle = propertyName + " (" + classId + ") - " + municipalityName + ", " + stateId;
document.title = docCompiledTitle;


// Division Number
var divNum;
document.getElementById("divNumField").innerHTML = divNum;


// Class (HOA, MHP, MUNI, etc.) of the geo
var classId;
document.getElementById("classIdField").innerHTML = classId;


// Property Name if applicable
var propertyName;
document.getElementById("propertyNameField").innerHTML = propertyName;


// The identifier ("City of...", etc.) of the geo, if applicable
var muniId;
// If it is not a MUNI, then set the muniId variable to a zero length string
if (classId !== "MUNI") {
	muniId = "";
}
document.getElementById("muniIdField").innerHTML = muniId;

// Geo/Municipality name
var municipalityName;
document.getElementById("municipailityNameField").innerHTML = municipalityName;
document.getElementById("municipailityNameDataField").innerHTML = municipalityName;


// State identifier (AZ, CO, CA, etc.)
var stateId;
document.getElementById("stateIdTitle").innerHTML = stateId;
document.getElementById("stateIdDataField").innerHTML = stateId;


// Lawson Number
var lawsonNum;
document.getElementById("lawsonNumField").innerHTML = lawsonNum;


// Pricing identifier
var pricingId;
document.getElementById("pricingIdField").innerHTML = " - " + pricingId + " Pricing";

//====================================================================

/* CONTACT, CONTRACT, AND HOURS */

// Website Builder for Contact section
var websiteUrl;
var websiteVisibleText;

// If there is no website URL, set the website anchor to be a dead link
if (websiteUrl.length === 0) {
	websiteUrl = "#";
}
// Test to see if the website link is an external or internal link and set it to spawn a new tab/window as appropriate
var internalLinkTest = websiteUrl.substring(0, 2);

if (internalLinkTest === "htt" || internalLinkTest === "DIV") {
	document.getElementById("website").target = "_blank";
}

if (websiteVisibleText.length === 0) {
	document.getElementById("website").innerHTML = "None";
} else {
	document.getElementById("website").innerHTML = websiteVisibleText;
}

// Contact field
var contactTitle;
document.getElementById("contact-title").innerHTML = contactTitle;


// Phone number for contact
var contactPhone;
document.getElementById("contact-phone").innerHTML = contactPhone;


// Contract Number
var contractNumber;
// If there is no contract number, set the field to default text
if (contractNumber.length === 0) {
	contractNumber = "Does not apply";
}
/* Placeholder for future Javascript to automatically add leading zeroes to contract numbers */
document.getElementById("contract-num").innerHTML = contractNumber;


// Contract Group number
var contractGroup;
// If there is no contract group number, set the field to default text
if (contractGroup.length === 0) {
	contractGroup = "Does not apply";
}
document.getElementById("contract-group").innerHTML = contractGroup;


// Contract Notes
var contractNotes;
// If there are no notes, set the field to default text
if (contractNotes.length === 0) {
	contractNotes = "No special notes apply";
}
document.getElementById("contract-notes").innerHTML = contractNotes;
/* Placeholder for future Javascript to automatically add leading zeroes to contract group numbers */


// Routed Account Number
var summaryRoutedAccountNumber;
// If there is no summary routed account number, set the field to default text
if (summaryRoutedAccountNumber.length === 0) {
	summaryRoutedAccountNumber = "Individually routed account";
}
document.getElementById("summary-acct-num").innerHTML = summaryRoutedAccountNumber;


// Serviced By - City
var siteServicedByCity;
// If there is no contract number, set the field to show an error
if (siteServicedByCity.length === 0) {
	siteServicedByCity = "ERROR! THIS FIELD CANNOT BE EMPTY";
	document.getElementById("serviced-by").classList.add("js-error");
}
document.getElementById("serviced-by").innerHTML = siteServicedByCity;


// Site Collection Hours
var siteCollectionHours;
// If there is no contract number, set the field to show an error
if (siteCollectionHours.length === 0) {
	siteCollectionHours = "ERROR! THIS FIELD CANNOT BE EMPTY";
	document.getElementById("collection-hours").classList.add("js-error");
}
document.getElementById("collection-hours").innerHTML = siteCollectionHours;


// Promotions
var promotionsData;
// If there are no promotions, set the field to default text
if (promotionsData.length === 0) {
	promotionsData = "No promotions at this time";
}
document.getElementById("promotions-field").innerHTML = promotionsData;

//====================================================================

// SOLID WASTE SERVICE

// If SWS is not offered, run the following
if (offeredSws === "No") {
	document.getElementById("sws-offered-toggle").innerHTML = "";
	document.getElementById("sws-not-offered-notice").innerHTML = " - Not Offered";

}

var offeredSws; // Toggles the SWS section between "Offered" and "Not Offered" and adjusts the visible components appropriately

var dispNotesLinkLandfill = linkPrefix + divNum + dispNotes + linkPostfix + anchorLandfill;
if (offeredSws === "Yes") {
	document.getElementById("sw-disposal-landfill").href = dispNotesLinkLandfill;
	document.getElementById("sw-disposal-landfill").target = "_blank";
	document.getElementById("sw-disposal-landfill").innerHTML = "Disposal Notes - Landfill / Transfer Notes";
} else {
	document.getElementById("sw-disposal-landfill").href = siteInformationSwd;
	document.getElementById("sw-disposal-landfill").target = "_blank";
	document.getElementById("sw-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}

// Solid Waste Service Type
var swsType;
if (swsType.length === 0) {
	swsType = "VALUE MISSING, CONTACT SUBJECT MATTER EXPERT FOR THE DIVISION";
	document.getElementById("sws-type").className = "js-error";
}
document.getElementById("sws-type").innerHTML = swsType;


// Solid Waste Rate
var swRate;
if (swRate.length === 0) {
	swRate = "Resident does not pay RS directly for service";
}
document.getElementById("sw_rate").innerHTML = swRate;

// Solid Waste Service Level
var swServiceLevel;
if (swServiceLevel.length === 0) {
	swServiceLevel = "No RS Containers provided";
}
document.getElementById("sws-level").innerHTML = swServiceLevel;

// Solid Waste Container Details
var swContainer;
if (swContainer.length === 0) {
	swContainer = "Not offered";
}
document.getElementById("sw-container-details").innerHTML = swContainer;


// Solid Waste Container Delivered By
var swContainerDeliveredBy;
if (swContainerDeliveredBy.length === 0) {
	swContainerDeliveredBy = "No RS Containers provided";
}
document.getElementById("sw-container-delivered").innerHTML = swContainerDeliveredBy;


// Solid Waste Service Day
var swServiceDay;
if (swServiceDay.length === 0) {
	swServiceDay = "Verify service day using ";
	document.getElementById("sw-day-maps-link").innerHTML = "Maps";
	document.getElementById("sw-day-maps-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("sw-day-maps-link").target = "_blank";
} else {
	document.getElementById("sw-day-maps-link").innerHTML = " ";
	document.getElementById("sw-day-maps-link").href = "#";
	document.getElementById("sw-day-maps-link").target = " ";
}
document.getElementById("sw-service-day").innerHTML = swServiceDay;


// Solid Waste Service Frequency
var swServiceFrequency;
if (swServiceFrequency.length === 0) {
	swServiceFrequency = "Verify service frequency using ";
	document.getElementById("sw-service-freq-link").innerHTML = "Maps";
	document.getElementById("sw-service-freq-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("sw-service-freq-link").target = "_blank";
} else {
	document.getElementById("sw-service-freq-link").innerHTML = "";
	document.getElementById("sw-service-freq-link").href = "#";
	document.getElementById("sw-service-freq-link").target = "";
}
document.getElementById("sw-service-freq").innerHTML = swServiceFrequency;


// Solid Waste Additional Container Rate
var swAdditionalContainerRate;
if (swAdditionalContainerRate.length === 0) {
	swAdditionalContainerRate = "Not Offered";
}
document.getElementById("sw-additional-container-rate").innerHTML = swAdditionalContainerRate;


// Solid Waste Additional Container Details
var swAdditionalContainerDetails;
if (swAdditionalContainerDetails.length === 0) {
	swAdditionalContainerDetails = "No RS Containers provided";
}
document.getElementById("swAdd").innerHTML = swAdditionalContainerDetails;


// Solid Waste Additional Containers Delivered By
var swAdditionalContainerDelivered;
if (swAdditionalContainerDelivered.length === 0) {
	swAdditionalContainerDelivered = "No RS Containers provided";
}
document.getElementById("sw-additional-container-delivered").innerHTML = swAdditionalContainerDelivered;


// Solid Waste Notes
var swNotes;
if (swNotes.length === 0) {
	swNotes = "No Special Notes";
}
document.getElementById("sw-notes").innerHTML = swNotes;



//====================================================================


// Recycle Service Type
var recType;
if (recType.length === 0) {
	recType = "VALUE MISSING, CONTACT SUBJECT MATTER EXPERT FOR THE DIVISION";
	document.getElementById("rec-type").className = "js-error";
}
document.getElementById("rec-type").innerHTML = recType;


// Recycle Rate
var recRate;
if (recRate.length === 0) {
	recRate = "Resident does not pay RS directly for service";
}
document.getElementById("rec_rate").innerHTML = recRate;


// Recycle Service Level
var recServiceLevel;
if (recServiceLevel.length === 0) {
	recServiceLevel = "No RS Containers provided";
}
document.getElementById("rec-level").innerHTML = recServiceLevel;


// Recycle Container Details
var recContainer;
if (recContainer.length === 0) {
	recContainer = "Not offered";
}
document.getElementById("rec-container-details").innerHTML = recContainer;


// Recycle Container Delivered By
var recContainerDeliveredBy;
if (recContainerDeliveredBy.length === 0) {
	recContainerDeliveredBy = "No RS Containers provided";
}
document.getElementById("rec-container-delivered").innerHTML = recContainerDeliveredBy;


// Recycle Service Day
var recServiceDay;
if (recServiceDay.length === 0) {
	recServiceDay = "Verify service day using ";
	document.getElementById("rec-day-maps-link").innerHTML = "Maps";
	document.getElementById("rec-day-maps-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("rec-day-maps-link").target = "_blank";
} else {
	document.getElementById("rec-day-maps-link").innerHTML = " ";
	document.getElementById("rec-day-maps-link").href = "#";
	document.getElementById("rec-day-maps-link").target = " ";
}
document.getElementById("rec-service-day").innerHTML = recServiceDay;


// Recycle Service Frequency
var recServiceFrequency;
if (recServiceFrequency.length === 0) {
	recServiceFrequency = "Verify service frequency using ";
	document.getElementById("rec-service-freq-link").innerHTML = "Maps";
	document.getElementById("rec-service-freq-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("rec-service-freq-link").target = "_blank";
} else {
	document.getElementById("rec-service-freq-link").innerHTML = "";
	document.getElementById("rec-service-freq-link").href = "#";
	document.getElementById("rec-service-freq-link").target = "";
}
document.getElementById("rec-service-freq").innerHTML = recServiceFrequency;


// Recycle Additional Container Rate
var recAdditionalContainerRate;
if (recAdditionalContainerRate.length === 0) {
	recAdditionalContainerRate = "Not Offered";
}
document.getElementById("rec-additional-container-rate").innerHTML = recAdditionalContainerRate;


// Recycle Additional Container Details
var recAdditionalContainerDetails;
if (recAdditionalContainerDetails.length === 0) {
	recAdditionalContainerDetails = "No RS Containers provided";
}
document.getElementById("recAdd").innerHTML = recAdditionalContainerDetails;


// Recycle Additional Container Delivered
var recAdditionalContainerDelivered;
if (recAdditionalContainerDelivered.length === 0) {
	recAdditionalContainerDelivered = "No RS Containers provided";
}
document.getElementById("rec-additional-container-delivered").innerHTML = recAdditionalContainerDelivered;


// Recycle Notes
var recNotes;
if (recNotes.length === 0) {
	recNotes = "No Special Notes";
}
document.getElementById("rec-notes").innerHTML = recNotes;

// Logic to determine whether Recycling is offered and what data to display depending on the answer.
var offeredRec; // Toggles the Recycling section between "Offered" and "Not Offered" and adjusts the visible components appropriately

var dispNotesLinkRecycle = linkPrefix + divNum + dispNotes + linkPostfix + anchorRec;
if (offeredRec === "Yes") {
	document.getElementById("rec-disposal-landfill").href = dispNotesLinkRecycle;
	document.getElementById("rec-disposal-landfill").target = "_blank";
	document.getElementById("rec-disposal-landfill").innerHTML = "Disposal Notes - Recycle Notes";
} else {
	document.getElementById("rec-disposal-landfill").href = siteInformationSwd;
	document.getElementById("rec-disposal-landfill").target = "_blank";
	document.getElementById("rec-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}

if (offeredRec === "No") {
	document.getElementById("rec-offered-toggle").innerHTML = "";
	document.getElementById("rec-not-offered-notice").innerHTML = " - Not Offered";
}


//====================================================================


// Yard Waste Service Type
var ywType;
if (ywType.length === 0) {
	ywType = "VALUE MISSING, CONTACT SUBJECT MATTER EXPERT FOR THE DIVISION";
	document.getElementById("yw-type").className = "js-error";
}
document.getElementById("yw-type").innerHTML = ywType;


// Yard Waste Rate
var ywRate;
if (ywRate.length === 0) {
	ywRate = "Resident does not pay RS diywtly for service";
}
document.getElementById("yw_rate").innerHTML = ywRate;


// Yard Waste Service Level
var ywServiceLevel;
if (ywServiceLevel.length === 0) {
	ywServiceLevel = "No RS Containers provided";
}
document.getElementById("yw-level").innerHTML = ywServiceLevel;


// Yard Waste Container Details
var ywContainer;
if (ywContainer.length === 0) {
	ywContainer = "Not offered";
}
document.getElementById("yw-container-details").innerHTML = ywContainer;


// Yard Waste Container Delivered By
var ywContainerDeliveredBy;
if (ywContainerDeliveredBy.length === 0) {
	ywContainerDeliveredBy = "No RS Containers provided";
}
document.getElementById("yw-container-delivered").innerHTML = ywContainerDeliveredBy;


// Yard Waste Service Day
var ywServiceDay;
if (ywServiceDay.length === 0) {
	ywServiceDay = "Verify service day using ";
	document.getElementById("yw-day-maps-link").innerHTML = "Maps";
	document.getElementById("yw-day-maps-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("yw-day-maps-link").target = "_blank";
} else {
	document.getElementById("yw-day-maps-link").innerHTML = " ";
	document.getElementById("yw-day-maps-link").href = "#";
	document.getElementById("yw-day-maps-link").target = " ";
}
document.getElementById("yw-service-day").innerHTML = ywServiceDay;


// Yard Waste Service Frequency
var ywServiceFrequency;
if (ywServiceFrequency.length === 0) {
	ywServiceFrequency = "Verify service frequency using ";
	document.getElementById("yw-service-freq-link").innerHTML = "Maps";
	document.getElementById("yw-service-freq-link").href = "https://salesforcemap.repsrv.com/RouteInfo/index.html";
	document.getElementById("yw-service-freq-link").target = "_blank";
} else {
	document.getElementById("yw-service-freq-link").innerHTML = "";
	document.getElementById("yw-service-freq-link").href = "#";
	document.getElementById("yw-service-freq-link").target = "";
}
document.getElementById("yw-service-freq").innerHTML = ywServiceFrequency;


// Yard Waste Additional Container Rate
var ywAdditionalContainerRate;
if (ywAdditionalContainerRate.length === 0) {
	ywAdditionalContainerRate = "Not Offered";
}
document.getElementById("yw-additional-container-rate").innerHTML = ywAdditionalContainerRate;


// Yard Waste Additional Container Details
var ywAdditionalContainerDetails;
if (ywAdditionalContainerDetails.length === 0) {
	ywAdditionalContainerDetails = "No RS Containers provided";
}
document.getElementById("ywAdd").innerHTML = ywAdditionalContainerDetails;


// Yard Waste Additional Container Delivered
var ywAdditionalContainerDelivered;
if (ywAdditionalContainerDelivered.length === 0) {
	ywAdditionalContainerDelivered = "No RS Containers provided";
}
document.getElementById("yw-additional-container-delivered").innerHTML = ywAdditionalContainerDelivered;


// Yard Waste Notes
var ywNotes;
if (ywNotes.length === 0) {
	ywNotes = "No Special Notes";
}
document.getElementById("yw-notes").innerHTML = ywNotes;

// Logic to determine whether Yard Waste is offered and what data to display depending on the answer.
var offeredYW; // Toggles the Recycling section between "Offered" and "Not Offered" and adjusts the visible components appropriately

var dispNotesLinkYW = linkPrefix + divNum + dispNotes + linkPostfix + anchorYw;
if (offeredYW === "Yes") {
	document.getElementById("yw-disposal-landfill").href = dispNotesLinkYW;
	document.getElementById("yw-disposal-landfill").target = "_blank";
	document.getElementById("yw-disposal-landfill").innerHTML = "Disposal Notes - Yard Waste Notes";
} else {
	document.getElementById("yw-disposal-landfill").href = siteInformationSwd;
	document.getElementById("yw-disposal-landfill").target = "_blank";
	document.getElementById("yw-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}

if (offeredYW === "No") {
	document.getElementById("yw-offered-toggle").innerHTML = "";
	document.getElementById("yw-not-offered-notice").innerHTML = " - Not Offered";
}


//====================================================================


// Delivery Fees
var feesDelivery;
if (feesDelivery.length === 0) {
	document.getElementById("fees-delivery").innerHTML = "No RS containers provided";
} else {
	document.getElementById("fees-delivery").innerHTML = feesDelivery;
}

// Removal Fees
var feesRemoval;
if (feesRemoval.length === 0) {
	document.getElementById("fees-removal").innerHTML = "No RS containers provided";
} else {
	document.getElementById("fees-removal").innerHTML = feesRemoval;
}

// Fuel Recover Fee
var feesFrf;
if (feesFrf.length === 0) {
	document.getElementById("fees-frf").innerHTML = "No fees apply";
} else {
	document.getElementById("fees-frf").innerHTML = feesFrf;
}

// Environmental Fee
var feesErf;
if (feesErf.length === 0) {
	document.getElementById("fees-erf").innerHTML = "No fees apply";
} else {
	document.getElementById("fees-erf").innerHTML = feesErf;
}

// Administration Fee
var feesAdmin;
if (feesAdmin.length === 0) {
	document.getElementById("fees-admin").innerHTML = "No fees apply";
} else {
	document.getElementById("fees-admin").innerHTML = feesAdmin;
}

// Service Reinstatement Fee
var feesReinstatement;
if (feesReinstatement.length === 0) {
	document.getElementById("fees-reinstatement").innerHTML = "No fees apply";
} else {
	document.getElementById("fees-reinstatement").innerHTML = feesReinstatement;
}

// Service Interupt Fee
var feesInterupt;
if (feesInterupt.length === 0) {
	document.getElementById("fees-interupt").innerHTML = "No fees apply due to contract terms";
} else {
	document.getElementById("fees-interupt").innerHTML = feesInterupt;
}

// Late Fee
var feesLatefee;
if (feesLatefee.length === 0) {
	document.getElementById("fees-latefee").innerHTML = "No fees apply due to contract terms";
} else {
	document.getElementById("fees-latefee").innerHTML = feesLatefee;
}

// Container Replacement Fee
var feesContainerReplacement;
if (feesContainerReplacement.length === 0) {
	document.getElementById("fees-container-replacement").innerHTML = "No fees apply due to contract terms";
} else {
	document.getElementById("fees-container-replacement").innerHTML = feesContainerReplacement;
}

// Other Fees
var feesOther;
if (feesOther.length === 0) {
	document.getElementById("fees-other").innerHTML = "None";
} else {
	document.getElementById("fees-other").innerHTML = feesOther;
}


//====================================================================

// Former Company Cart Colors
var infoCartColors;
if (infoCartColors.length === 0) {
	document.getElementById("info-cart-colors").innerHTML = "None";
} else {
	document.getElementById("info-cart-colors").innerHTML = infoCartColors;
}

// Former Company Cart Colors
var infoContainerReplacement;
if (infoContainerReplacement.length === 0) {
	document.getElementById("info-container-replacement").innerHTML = "No RS containers provided";
} else {
	document.getElementById("info-container-replacement").innerHTML = infoContainerReplacement;
}

// Former Company Cart Colors
var infoContainerPickup;
if (infoContainerPickup.length === 0) {
	document.getElementById("info-container-pickup").innerHTML = "Not Applicable";
} else {
	document.getElementById("info-container-pickup").innerHTML = infoContainerPickup;
}

// Former Company Cart Colors
var infoCSA;
if (infoCSA.length === 0) {
	document.getElementById("info-csa").innerHTML = "Not Offered";
} else {
	document.getElementById("info-csa").innerHTML = infoCSA;
}

// Former Company Cart Colors
var infoWalkIn;
if (infoWalkIn.length === 0) {
	document.getElementById("info-walkin").innerHTML = "Not Offered";
} else {
	document.getElementById("info-walkin").innerHTML = infoWalkIn;
}


//====================================================================


// Appliances
var appRate;
if (appRate.length === 0) {
	appRate = "Resident does not pay RS directly for service";
}
document.getElementById("appliance-rate").innerHTML = appRate;


// Appliances Container Details
var appLimit;
if (appLimit.length === 0) {
	appLimit = "Not offered";
}
document.getElementById("appliance-limit").innerHTML = appLimit;


// Appliances Container Delivered By
var appServiced;
if (appServiced.length === 0) {
	appServiced = "No RS Containers provided";
}
document.getElementById("appliance-serviced-by").innerHTML = appServiced;


// Appliances Service Day
var appServiceDay;
if (appServiceDay.length === 0) {
	appServiceDay = "This field should not be visible if there is no service day";
	document.getElementById("appliance-service-day").classList.add("js-error");
}
document.getElementById("appliance-service-day").innerHTML = appServiceDay;


// Appliances Service Frequency
var appServiceFrequency;
if (appServiceFrequency.length === 0) {
	appServiceFrequency = "This field should not be visible if there is no service day";
	document.getElementById("appliance-service-freq").classList.add("js-error");
}
document.getElementById("appliance-service-freq").innerHTML = appServiceFrequency;


// Appliances Notes
var appNotes;
if (appNotes.length === 0) {
	appNotes = "No Special Notes";
}
document.getElementById("appliance-notes").innerHTML = appNotes;

// Logic to determine whether Appliances is offered and what data to display depending on the answer.
var offeredApp; // Toggles the Recycling section between "Offered" and "Not Offered" and adjusts the visible components appropriately

var dispNotesLinkApp = linkPrefix + divNum + dispNotes + linkPostfix + anchorApp;
if (offeredApp === "Yes") {
	document.getElementById("appliance-disposal-landfill").href = dispNotesLinkApp;
	document.getElementById("appliance-disposal-landfill").target = "_blank";
	document.getElementById("appliance-disposal-landfill").innerHTML = "Disposal Notes - Appliances Notes";
} else {
	document.getElementById("appliance-disposal-landfill").href = siteInformationSwd;
	document.getElementById("appliance-disposal-landfill").target = "_blank";
	document.getElementById("appliance-disposal-landfill").innerHTML = "Solid Waste District Contacts for Other Disposal";
}

if (offeredApp === "No") {
	document.getElementById("appliance-offered-toggle").innerHTML = "";
	document.getElementById("appliance-not-offered-notice").innerHTML = " - Not Offered";
}


//====================================================================

var offeredBulk;
var bulkRate;
var bulkLimit;
var bulkServiced;
var bulkServiceDay;
var bulkServiceFrequency;
var bulkNotes;




//====================================================================





//====================================================================





//====================================================================





//====================================================================





//====================================================================






