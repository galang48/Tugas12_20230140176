document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const peminatan = document.querySelector("input[name='peminatan']:checked")?.value || "Belum dipilih";
    const alamat = document.getElementById("alamat").value;
    const angkatan = document.getElementById("angkatan").value;
    const tanggal = document.getElementById("tanggal").value;

    // Create a more elegant alert/notification
    const message = `
        🎓 <strong>Data Pendaftaran</strong> 🎓
        <br><br>
        <strong>Nama:</strong> ${name}<br>
        <strong>NIM:</strong> ${nim}<br>
        <strong>Peminatan:</strong> ${peminatan}<br>
        <strong>Alamat:</strong> ${alamat}<br>
        <strong>Angkatan:</strong> ${angkatan}<br>
        <strong>Tanggal:</strong> ${tanggal}
    `;
    
    // Using SweetAlert for a modern look (you'd need to include the library)
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Pendaftaran Berhasil!',
            html: message,
            icon: 'success',
            confirmButtonColor: '#6c5ce7',
            background: '#1e1e1e',
            color: '#ffffff'
        });
    } else {
        // Fallback to regular alert
        alert(
            "Nama : " + name +
            "\nNIM : " + nim +
            "\nPeminatan : " + peminatan +
            "\nAlamat : " + alamat +
            "\nAngkatan : " + angkatan +
            "\nTanggal : " + tanggal
        );
    }
    
    // Reset form after submission
    this.reset();
});

