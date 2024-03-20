// Main data to display in table view
const tableData = [
  {
    id: 1,
    brand: "Wix",
    brand_logo: "./images/Wix Icon.svg",
    description:
      "Wix is a cloud-based web development platform that allows users to create HTML5 websites and mobile sites through the use of online drag and drop tools.",
    members: [
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["Automation", "e-commerce", "Saas"],
    tags: ["website builder", "online presence", "small business"],
    next_meeting: "today",
    meeting_bg_color: "#66ff99",
    checkbox: false,
    chat_count: 2,
  },
  {
    id: 2,
    brand: "Shopify",
    brand_logo: "./images/Shopify Bag.svg",
    description:
      "Shopify is an e-commerce platform that allows individuals and businesses to create online stores.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["e-commerce", "B2B", "Saas"],
    tags: ["online shopping", "entrepreneurship", "retail"],
    next_meeting: "tomorrow",
    meeting_bg_color: "#ff6666",
    checkbox: false,
    chat_count: 0,
  },
  {
    id: 3,
    brand: "MailChimp",
    brand_logo: "./images/MailChimp Freddie Icon.svg",
    description:
      "MailChimp is a marketing automation platform and email marketing service.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-1.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-6.jpg",
    ],
    categories: ["Automation", "B2B", "Saas"],
    tags: ["email marketing", "digital marketing", "small business"],
    next_meeting: "10 minutes",
    meeting_bg_color: "#ffff99",
    checkbox: false,
    chat_count: 0,
  },
  {
    id: 4,
    brand: "Paypal",
    brand_logo: "./images/PayPal.svg",
    description:
      "PayPal is an online payment system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["Automation", "B2B"],
    tags: ["online payments", "secure transactions", "financial services"],
    next_meeting: "30 minutes",
    meeting_bg_color: "#99ff99",
    checkbox: true,
    chat_count: 7,
  },
  {
    id: 5,
    brand: "Disney",
    brand_logo: "./images/Disney+.svg",
    description:
      "Disney is a multinational diversified entertainment and media conglomerate.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["Entertainment"],
    tags: ["movies", "theme parks", "family entertainment"],
    next_meeting: "today",
    meeting_bg_color: "#66ff99",
    checkbox: false,
    chat_count: 0,
  },
  {
    id: 6,
    brand: "Intercom",
    brand_logo: "./images/Intercom.svg",
    description:
      "Intercom is a customer messaging platform that enables businesses to communicate with customers through a variety of channels, including chat, email, and social media.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["Saas"],
    tags: ["customer support", "live chat", "user engagement"],
    next_meeting: "tomorrow",
    meeting_bg_color: "#ff6666",
    checkbox: true,
    chat_count: 9,
  },
  {
    id: 7,
    brand: "Google",
    brand_logo: "./images/Google New G Icon.jpg",
    description:
      "Google is a multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-6.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-3.jpg",
    ],
    categories: ["Technology", "Automation", "Saas"],
    tags: ["search engine", "cloud computing", "software development"],
    next_meeting: "10 minutes",
    meeting_bg_color: "#ffff99",
    checkbox: false,
    chat_count: 5,
  },
  {
    id: 8,
    brand: "Evernote",
    brand_logo: "./images/Evernote icon.svg",
    description:
      "Evernote is a note-taking app that allows users to capture, organize, and share notes in various formats, including text, photos, and audio recordings.",
    members: [
      "./images/user-icon-2.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-1.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-6.jpg",
    ],
    categories: ["Automation", "e-commerce", "Saas"],
    tags: ["productivity", "note-taking", "organization"],
    next_meeting: "30 minutes",
    meeting_bg_color: "#99ff99",
    checkbox: true,
    chat_count: 0,
  },
  {
    id: 9,
    brand: "Microsoft",
    brand_logo: "./images/Microsoft 2012 Vertical.svg",
    description:
      "Microsoft is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["e-commerce", "B2B", "Saas"],
    tags: ["software development", "cloud services", "productivity tools"],
    next_meeting: "today",
    meeting_bg_color: "#66ff99",
    checkbox: false,
    chat_count: 12,
  },
  {
    id: 10,
    brand: "Invision",
    brand_logo: "./images/invasion-logo.jpeg",
    description:
      "InVision is a digital product design platform used to make the process of designing digital products, from websites to mobile apps, seamless.",
    members: [
      "./images/user-icon-1.jpg",
      "./images/user-icon-4.jpg",
      "./images/user-icon-3.jpg",
      "./images/user-icon-2.jpg",
      "./images/user-icon-5.jpg",
      "./images/user-icon-7.jpg",
    ],
    categories: ["Automation", "B2B", "Saas"],
    tags: ["design", "prototyping", "collaboration"],
    next_meeting: "tomorrow",
    meeting_bg_color: "#ff6666",
    checkbox: false,
    chat_count: 0,
  },
];

// filtered data to be displayed in the table view
let filteredTableData = tableData;

// slected count if they checked checkboxes
let selectedCount = 0;

// Function to display JSON data in the table
function displayData() {
  var tableBody = document.getElementById("table-body");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Iterate over JSON data and create table rows
  filteredTableData.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <div class="row g-0">
                <div class="col-md-2 d-flex justify-content-center align-items-center p-2">
                    <input type="checkbox" value="" ${
                      item.checkbox ? "checked" : ""
                    }>
                </div>
                <div class="col-md-8 d-flex justify-content-start align-items-center p-2">
                    <img src='${item.brand_logo}' alt='${
      item.brand_logo
    }' class="logo-icon">
                    <p class="m-0 ms-2">${item.brand}</p>
                </div>
                <div class="col-md-2 d-flex justify-content-center align-items-center p-2">
                    <i class="bi bi-chat-left"></i>
                    <span class="ms-2">${item.chat_count}</span>
                </div>
            </div>
        </td>
        <td class="scroll-context">${item.description}</td>
        <td class="scroll-context">${item.members.map(
          (data) =>
            '<img src="' + data + '" alt="members-icon" class="members-icon">'
        )}</td>
        <td class="scroll-context">${item.categories.join(", ")}</td>
        <td class="scroll-context">#${item.tags.join(", ")}</td>
        <td><span class="p-2 rounded" style="background-color: ${
          item.meeting_bg_color
        }">${item.next_meeting}</span></td>
        `;
    row.classList.add(item.checkbox ? "bg-light" : "bg-white");
    tableBody.appendChild(row);

    // Add event listener to checkboxes
    const checkbox = row.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", function () {
      //   calculating selected count based on filter table data checkboxes
      selectedCount = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      ).length;

      //adding the selected count to the dom
      let selectedCountElement = document.getElementById("selected-count");
      selectedCountElement.innerHTML = selectedCount;
    });
  });

  //   calculating selected count based on filter table data checkboxes
  selectedCount = filteredTableData.filter((data) => data.checkbox).length;

  //adding the selected count to the dom
  let selectedCountElement = document.getElementById("selected-count");
  selectedCountElement.innerHTML = selectedCount;

  //   To add the last static row in the table
  var staticRow = document.createElement("tr");
  staticRow.innerHTML = `
        <td class="text-end"><span>${filteredTableData.length} Count</span></td>
        <td class="text-end"><span>+ Add Calculation</span></td>
        <td class="text-end"><span>+ Add Calculation</span></td>
        <td class="text-end"><span>+ Add Calculation</span></td>
        <td class="text-end"><span>+ Add Calculation</span></td>
        <td></td>
        <td></td>
    `;
  //   Appendinf statick row to the table
  tableBody.appendChild(staticRow);
}

// Calling the displayData function to populate the table initially
displayData();

// to handle search functionality based on brand name
function search() {
  // Fetching the search query the user have ityped
  const searchQuery = document.getElementById("searchInput").value;

  // Filter JSON data based on search query
  filteredTableData = tableData.filter((item) => {
    return item.brand.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // After filtering calling the displayData function againg to populate the table with filtered data
  displayData();
}

// on search input by pressing the enter key from keyboard search functionality will work
function handleKeyDown(event) {
  // getting the key event and wrting conditon on press on 'Enter' button
  if (event.key === "Enter") {
    // Prevent default form submission behavior
    event.preventDefault();

    // On eneter performing the search functionailty again by calling the search function
    search();
  }
}
