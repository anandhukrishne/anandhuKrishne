document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.modal-close');
    const readButtons = document.querySelectorAll('.port-btn-secondary');

    // Sample database of full articles (In a real app, this would be an API call)
    const articleDatabase = {
        "Mastering MIPS: Understanding `sw` & `lw`": "MIPS (Microprocessor without Interlocked Pipelined Stages) is a reduced instruction set computer (RISC) instruction set architecture (ISA). Memory management is crucial in assembly. The 'sw' (store word) instruction moves data from a register to memory, while 'lw' (load word) moves data from memory to a register. Understanding these limits is essential for efficient cache allocation and low-level system optimization. <br><br> In this post, we explore how word alignment affects performance and why improper offset calculation leads to system exceptions. We'll also cover advanced topics like memory-mapped I/O and how these basic instructions form the foundation of more complex data structures in assembly language.",
        "Evaluating Postfix via Shunting Yard": "The Shunting Yard algorithm is a method for parsing mathematical expressions specified in infix notation. It can produce either a postfix notation string (also known as Reverse Polish Notation) or an Abstract Syntax Tree (AST). Stacks are the backbone of this process. By converting infix to postfix, we eliminate the need for parentheses and operator precedence rules during evaluation, making it significantly faster for compilers to process. <br><br> We will analyze the time complexity (O(n)) and walk through a manual trace of the algorithm using a stack for operators and an output queue for operands.",
        "Why 45|STUDioS Opts for Core Vanilla CSS": "Utility frameworks like Tailwind or Bootstrap are great for speed, but they often lead to 'div soup' and a lack of deep CSS understanding. At 45|STUDioS, we prioritize precision and performance. By using Vanilla CSS with CSS Variables (Custom Properties), we achieve the same modularity as frameworks but with zero runtime overhead and complete creative control. <br><br> This approach ensures our designs remain lightweight and easy to audit for performance. We'll discuss how we structure our variable-driven design systems and the benefits of maintaining a small, purpose-built CSS footprint over large, generic external libraries."
    };

    readButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.port-card');
            const title = card.querySelector('.port-card-title').innerText;
            const category = card.querySelector('span').innerText;
            const summary = card.querySelector('.port-card-desc').innerText;

            modalTitle.innerText = title;
            modalCategory.innerText = category;
            
            // Get full content from our mock database or fallback to summary
            modalContent.innerHTML = articleDatabase[title] || summary;

            modal.showModal();
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.documentElement.classList.add('modal-open');
            document.body.classList.add('modal-open');
        });
    });

    const closeModal = () => {
        modal.close();
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
    };

    closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            closeModal();
        }
    });

    // Handle Escape key (dialog handles it by default, but we need to remove body class)
    modal.addEventListener('cancel', () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
    });
});
