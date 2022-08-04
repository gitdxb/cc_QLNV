/**
 * Khai báo lớp đối tượng Nhân Viên
 */
function NhanVien(taiKhoan, tenNV, email, password, ngayLam, luongCB, chucVu, gioLam) {
    // thuộc tính
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.luong = 0;
    this.xeploai = '';


    // phương thức
    this.tongLuong = function() {
        var indexOption = document.getElementById('chucvu').selectedIndex;
        var luongCoBan = document.getElementById('luongCB').value;
        
        if (indexOption == 1) {
            // Sep
            this.luong = luongCoBan * 3;
            console.log('Sep');
            console.log(this.luong);
            return this.luong;
        } else if (indexOption == 2) {
            // Truong phong
            this.luong = luongCoBan * 2;
            console.log('Truong phong');
            console.log(this.luong);
            return this.luong;
        } else if (indexOption == 3) {
            // Nhan vien
            this.luong = luongCoBan;
            console.log('nhan vien');
            console.log(this.luong);
            return this.luong;
        }
    }

    this.xeploaiNV = function(){}
    
}