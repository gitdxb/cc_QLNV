/**
 * Chứa các hàm xử lý tương tác UI
 */
//GLOBAL
var dsnv = new DanhSachNhanVien();
var validate = new Validation();
// Hàm rút gọn cú phát getElementByID
function getELE(id) {
  return document.getElementById(id);
}
function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV") != undefined) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
  }

  hienThiDS(dsnv.mangNV);
}
getLocalStorage();

// Thêm nhân viên mới
function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var tenNV = getELE("name").value;
  var email = getELE("email").value;
  var password = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  // to check if input is valid
  var isValidInp = true;
  // Kiểm tra tài khoản hợp lệ (Ko rỗng, từ 4-6 ký tự số)
  isValidInp &=
    validate.checkEmpty(
      taiKhoan,
      "tbTKNV",
      "Tài khoản nhân viên không được trống"
    ) &&
    validate.checkAccount(taiKhoan, "tbTKNV", "Tài khoản từ 4 đến 6 ký tự số") && validate.checkExistedUser(taiKhoan, "tbTKNV", "Trùng");

  // Kiểm tra tên hợp lệ (rỗng và chỉ chữ)
  isValidInp &= validate.checkEmpty(tenNV, "tbTen", "Tên nhân viên không được trống") &&  validate.checkName(tenNV, "tbTen", "Tên nhân viên chỉ được nhập chữ");

  // Kiểm tra email hợp lệ (rỗng và định dạng)
  isValidInp &= validate.checkEmpty(email, "tbEmail", "Email không được để trống") && validate.checkEmail(email, "tbEmail", "Email không đúng định dạng");

  // Kiểm tra mật khẩu (rỗng + định dạng)
  isValidInp &= validate.checkEmpty(password, "tbMatKhau","Mật khẩu không được để trống") && validate.checkPass(password,"tbMatKhau","Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

  // Kiểm tra ngày hợp lệ
  isValidInp &= validate.checkEmpty(ngayLam, "tbNgay", "Ngày không được để trống") && validate.checkDate(ngayLam, "tbNgay", "Định dạng ngày MM/DD/YYYY");

  // Kiểm tra lương hợp lệ
  isValidInp &= validate.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống") && validate.checkSalary(luongCB, "tbLuongCB", "Lương chỉ được khoảng 1tr - 20tr");

  // Kiểm tra chức vụ
  isValidInp &= validate.checkTitle("chucvu", "tbChucVu", "Chưa chọn chức vụ");

  // Kiểm tra giờ làm hợp lệ
  isValidInp &= validate.checkEmpty(gioLam, "tbGiolam", "Giờ làm không đc để trống") && validate.checkHour(gioLam, "tbGiolam", "Giờ làm chỉ trong khoảng 80-200 giờ");

  if (isValidInp) {
    // tạo thể hiện của NV
    var nv = new NhanVien(
      taiKhoan,
      tenNV,
      email,
      password,
      ngayLam,
      Number(luongCB),
      chucVu,
      Number(gioLam)
    );

    nv.tongLuong();

    // Thêm nv vào mangNV
    dsnv.themNV(nv);

    // Gọi hàm hiển thị
    hienThiDS(dsnv.mangNV);

    setLocalStorage();
  }
}

// Hiển thị DSNV
function hienThiDS(mangNV) {
  var content = ""; // Giá trị ban đầu
  mangNV.map(function (nv) {
    var trELE = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.luongCB}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        `;
    content += trELE;
  });
  getELE("tableDanhSach").innerHTML = content;
}

function capNhatNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var tenNV = getELE("name").value;
  var email = getELE("email").value;
  var password = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  // tạo thể hiện của NV
  var nv = new NhanVien(
    taiKhoan,
    tenNV,
    email,
    password,
    ngayLam,
    Number(luongCB),
    chucVu,
    Number(gioLam)
  );

  nv.tongLuong();
  console.log("nhân viên: " + nv);

  dsnv.capNhatNV(nv);
  hienThiDS(dsnv.mangNV);
  setLocalStorage();
}

// Xoá nhân viên
function xoaNhanVien(tknv) {
  dsnv.xoaNV(tknv);
  hienThiDS(dsnv.mangNV);
  setLocalStorage(dsnv.mangNV);
}
