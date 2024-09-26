
export interface TechInfo {
    widthFork: number;  // Chiều rộng của càng
    widthUnit: string;  // Đơn vị chiều rộng (mm)
    capacityValue: string; // Giá trị tải trọng
    capacityUnit: string;  // Đơn vị tải trọng (Tấn)
  }
  
  export interface Product {
    equipment_id: string;      // ID thiết bị
    product_name: string;      // Tên sản phẩm
    price: number;             // Giá sản phẩm
    description: string;       // Mô tả sản phẩm
    brand: string;             // Thương hiệu
    model: string;             // Mẫu sản phẩm
    manufacture_year: number;  // Năm sản xuất
    lead_time: string;         // Thời gian giao hàng
    location: string;          // Vị trí
    transferState: string;     // Trạng thái chuyển giao
    imageLinks: string[];      // Danh sách các liên kết hình ảnh
    state: string;             // Trạng thái sản phẩm (Đã qua sử dụng, Mới, ...)
    techInfo: TechInfo;        // Thông tin kỹ thuật
  }
  