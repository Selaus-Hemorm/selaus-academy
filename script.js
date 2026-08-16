/* =====================================================
   SELAUS ACADEMY
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

if(menu && nav){

  menu.addEventListener("click", function(){

    const isOpen = nav.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menu.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });


  document.querySelectorAll("#nav a").forEach(function(link){

    link.addEventListener("click", function(){

      nav.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

      menu.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

}


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = {

  dm: {

    icon: "DM",

    title: "Digital Marketing Beginner Guide",

    price: "৳ ১৯৯",

    description:
      "Digital Marketing-এর basic থেকে practical understanding তৈরি করার জন্য beginner-friendly guide।",

    items: [
      "Digital Marketing Fundamentals",
      "Social Media Marketing",
      "Content Marketing",
      "Beginner Roadmap",
      "Digital Career Direction"
    ],

   buyUrl:
"order.html?product=dm",

supportWhatsapp:
"https://wa.me/8801753630079?text=..."
  },


  canva: {

    icon: "CV",

    title: "Canva Beginner to Professional Guide",

    price: "৳ ২৯৯",

    description:
      "Canva ব্যবহার করে professional social media, marketing এবং career-related design তৈরি করার practical guide।",

    items: [
      "Canva Fundamentals",
      "Design Basics",
      "Social Media Design",
      "Marketing Materials",
      "Professional Workflow"
    ],

    buyUrl:
"order.html?product=dm",

supportWhatsapp:
"https://wa.me/8801753630079?text=..."
  },


  freelancing: {

    icon: "FR",

    title: "Freelancing Beginner Guide",

    price: "৳ ২৯৯",

    description:
      "Freelancing শুরু করার জন্য skill, portfolio, client communication এবং online opportunity সম্পর্কে practical roadmap।",

    items: [
      "Freelancing Fundamentals",
      "Online Opportunities",
      "Portfolio Preparation",
      "Client Communication",
      "Beginner Roadmap"
    ],

    buyUrl:
"order.html?product=dm",

supportWhatsapp:
"https://wa.me/8801753630079?text=..."
  },


  upwork: {

    icon: "UP",

    title: "Upwork Proposal Guide",

    price: "৳ ৩৯৯",

    description:
      "Upwork job বুঝে professional proposal তৈরি, client approach এবং proposal strategy শেখার guide।",

    items: [
      "Job Analysis",
      "Proposal Structure",
      "Client Communication",
      "Proposal Examples",
      "Winning Proposal Strategy"
    ],

    buyUrl:
"order.html?product=dm",

supportWhatsapp:
"https://wa.me/8801753630079?text=..."
  },


  fiverr: {

    icon: "FV",

    title: "Fiverr Gig Guide",

    price: "৳ ৩৯৯",

    description:
      "Fiverr profile এবং gig তৈরি, optimization এবং client communication-এর beginner-friendly guide।",

    items: [
      "Fiverr Profile Setup",
      "Gig Creation",
      "Gig Optimization",
      "Client Communication",
      "Fiverr Beginner Strategy"
    ],

   buyUrl:
"order.html?product=dm",

supportWhatsapp:
"https://wa.me/8801753630079?text=..."
  }

};


/* =====================================================
   OPEN PREVIEW
===================================================== */

function openPreview(productKey){

  const product = products[productKey];

  if(!product){
    return;
  }


  let itemsHTML = "";


  product.items.forEach(function(item){

    itemsHTML += `
      <li>✓ ${item}</li>
    `;

  });


  const previewContent =
    document.getElementById("previewContent");


  if(!previewContent){
    return;
  }


  previewContent.innerHTML = `

    <div class="preview-header">

      <div class="preview-icon">
        ${product.icon}
      </div>

      <div>

        <div class="preview-label">
          PRODUCT PREVIEW
        </div>

        <h2 id="previewTitle">
          ${product.title}
        </h2>

      </div>

    </div>


    <div class="preview-cover">

      <div class="preview-cover-inner">

        <span>
          SELAUS ACADEMY
        </span>

        <strong>
          ${product.title}
        </strong>

        <small>
          Learn • Practice • Build • Grow
        </small>

      </div>

    </div>


    <div class="preview-description">

      <h3>
        এই Product সম্পর্কে
      </h3>

      <p>
        ${product.description}
      </p>

    </div>


    <div class="preview-features">

      <h3>
        এই Guide-এ থাকছে
      </h3>

      <ul>
        ${itemsHTML}
      </ul>

    </div>


    <div class="preview-security">

      🔐
      <strong>
        Full file public নয়
      </strong>

      <p>
        সম্পূর্ণ PDF এবং PPTX purchase করার পরে
        আপনার Gmail address-এ personal access দেওয়া হবে।
      </p>

    </div>


    <div class="preview-bottom">

      <div>

        <small>
          Launch Price
        </small>

        <strong>
          ${product.price}
        </strong>

      <div class="modal-actions">

  <a
    href="${product.buyUrl}"
    class="modal-buy">
    🛒 Buy Now
  </a>

  <a
    href="${product.supportWhatsapp}"
    target="_blank"
    rel="noopener noreferrer"
    class="modal-support">
    💬 Ask on WhatsApp
  </a>

</div>
  `;


  const modal =
    document.getElementById("previewModal");


  if(!modal){
    return;
  }


  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  const closeButton =
    modal.querySelector(".modal-close");


  if(closeButton){

    setTimeout(function(){

      closeButton.focus();

    },50);

  }

}


/* =====================================================
   CLOSE PREVIEW
===================================================== */

function closePreview(){

  const modal =
    document.getElementById("previewModal");


  if(!modal){
    return;
  }


  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
  "keydown",
  function(event){

    if(event.key === "Escape"){

      closePreview();

    }

  }
);


/* =====================================================
   MODAL TAB SAFETY
===================================================== */

document.addEventListener(
  "keydown",
  function(event){

    if(event.key !== "Tab"){
      return;
    }


    const modal =
      document.getElementById("previewModal");


    if(
      !modal ||
      !modal.classList.contains("show")
    ){
      return;
    }


    const focusable =
      modal.querySelectorAll(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );


    if(!focusable.length){
      return;
    }


    const first =
      focusable[0];

    const last =
      focusable[focusable.length - 1];


    if(event.shiftKey){

      if(document.activeElement === first){

        event.preventDefault();

        last.focus();

      }

    }else{

      if(document.activeElement === last){

        event.preventDefault();

        first.focus();

      }

    }

  }
);


/* =====================================================
   CLOSE MODAL WHEN CLICKING OVERLAY
===================================================== */

const modalOverlay =
  document.querySelector(".modal-overlay");


if(modalOverlay){

  modalOverlay.addEventListener(
    "click",
    closePreview
  );

}


/* =====================================================
   PREVENT HASH JUMP GLITCH
===================================================== */

window.addEventListener(
  "load",
  function(){

    if(window.location.hash){

      setTimeout(function(){

        const element =
          document.querySelector(
            window.location.hash
          );


        if(element){

          element.scrollIntoView({
            behavior:"smooth"
          });

        }

      },100);

    }

  }
);
