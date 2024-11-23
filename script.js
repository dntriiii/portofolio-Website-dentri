const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.body;

// navbar muncul dan hilang
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul');
    navigationBar.classList.toggle('ul-active');

    const menuNavigationBar = document.querySelectorAll('header ul li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active')
        })
    })

})


// ANIMATION SECTION SKILL
const fieldSkill = document.querySelectorAll('.field-image-skill');
for (let i = 0; i < fieldSkill.length; i++) {
    if (i % 2 === 0) {
        // Index genap
        fieldSkill[i].setAttribute('data-aos', 'flip-right');
    }
    if (i % 2 === 1) {
        // Index ganjil
        fieldSkill[i].setAttribute('data-aos', 'flip-left');
    }
    if (window.innerWidth > 768) {
        if (i == 0) {
            fieldSkill[i].setAttribute('data-aos-duration', '300');
        }
        else {
            fieldSkill[i].setAttribute('data-aos-delay', `${i * 300}`);
        }
    }
}

// ALERT SECTION PROJECT
const linkToProject = document.querySelectorAll('.link-to-project');
linkToProject.forEach(function (project) {
    project.addEventListener('click', function (e) {
        e.preventDefault();

        let atributLinkProject = project.getAttribute('href');

        Swal.fire({
            title: "Are you sure?",
            text: "This action will bring you to project",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, go there"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = atributLinkProject;
            }
        });
    })
})



// // ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll('.field-project');
for (let i = 0; i < fieldProject.length; i++) {
    if (window.innerWidth > 768) {
        fieldProject[i].setAttribute('data-aos-duration', '1000');
        if (i % 2 === 0) {
            fieldProject[i].setAttribute('data-aos', 'fade-up-right');
        }
        else {
            fieldProject[i].setAttribute('data-aos', 'fade-up-left');
        }
    }

    else {
        fieldProject[i].setAttribute('data-aos', 'fade-up');
        fieldProject[i].setAttribute('data-aos-duration', '700')
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika dikonfirmasi, lanjutkan pengiriman
        setButtonText("Sending...");

        const currentDate = new Date().toLocaleString();

        if (editingIndex !== null) {
          // Update pesan yang sudah ada
          const updatedSubmissions = submissions.map((submission, index) =>
            index === editingIndex
              ? { ...submission, ...formDetails }
              : submission
          );
          setSubmissions(updatedSubmissions);
          setEditingIndex(null);
          setStatus({ success: true, message: "Message updated successfully" });
        } else {
          // Tambahkan pesan baru
          const newSubmission = {
            id: submissions.length + 1,
            name: formDetails.name,
            email: formDetails.email,
            message: formDetails.message,
            date: currentDate,
          };
          setSubmissions([...submissions, newSubmission]);
          setStatus({ success: true, message: "Message saved successfully" });
        }

        // Reset form
        setFormDetails(formInitialDetails);
        setButtonText("Send");

        // Tampilkan notifikasi sukses
        Swal.fire("Sent!", "Your message has been sent.", "success");
      }
    });
  };


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


