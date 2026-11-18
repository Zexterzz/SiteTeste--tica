/*
==================================================
CONFIGURAÇÃO DO WHATSAPP
==================================================

Coloque aqui o número real da ótica.

Formato:
55 + DDD + número

Exemplo:
5511999999999
*/

const WHATSAPP_NUMBER = "5511999999999";


/*
==================================================
WHATSAPP
==================================================
*/

function openWhatsApp(message) {

    const encodedMessage = encodeURIComponent(message);

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/*
==================================================
BOTÕES DO WHATSAPP
==================================================
*/

document.querySelectorAll(".js-whatsapp").forEach((button) => {

    button.addEventListener("click", () => {

        const message =
            button.dataset.message ||
            "Olá! Gostaria de falar com a Ótica Vértice.";

        openWhatsApp(message);

    });

});


/*
==================================================
MENU MOBILE
==================================================
*/

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");


menuToggle.addEventListener("click", () => {

    const isOpen =
        nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/*
==================================================
FECHAR MENU AO CLICAR EM UM LINK
==================================================
*/

document
    .querySelectorAll(".nav a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/*
==================================================
FILTRO DOS PRODUTOS
==================================================
*/

const tabs =
    document.querySelectorAll(".tab");

const products =
    document.querySelectorAll(".product-card");


tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove o active de todos
        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        // Ativa o botão clicado
        tab.classList.add("active");

        const filter =
            tab.dataset.filter;

        products.forEach((product) => {

            const categories =
                product.dataset.category.split(" ");

            const shouldShow =
                filter === "all" ||
                categories.includes(filter);

            product.classList.toggle(
                "hidden",
                !shouldShow
            );

        });

    });

});


/*
==================================================
ANIMAÇÕES AO ROLAR A PÁGINA
==================================================
*/

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        revealObserver.observe(element);

    });


/*
==================================================
BOTÃO VOLTAR AO TOPO
==================================================
*/

const backTop =
    document.querySelector(".back-top");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    },
    {
        passive: true
    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/*
==================================================
AVISO NO CONSOLE
==================================================
*/

if (
    WHATSAPP_NUMBER === "5511999999999"
) {

    console.warn(
        "Configure o número do WhatsApp da ótica no arquivo script.js."
    );

}