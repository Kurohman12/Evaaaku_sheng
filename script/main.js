document.getElementById('whatsapp-button').addEventListener('click', function() {
    const phoneNumber = '082134399860'; // Ganti dengan nomor telepon tujuan
    const message = "Happy Birthday Evaaa! 🎉 terimakasih telah menemaniku selama ini, I LOVE YOU";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});

