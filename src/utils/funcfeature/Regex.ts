export interface UserData {
  email?: string;
  fullname?: string;
  password?: string;
  password2?: string;
  phone?: string;
  role_code?: string;
}

export interface driverData {
  nameDriver: string;
  licenseDriver: string;
  numberPhoneDriver: string;
}

export const regexNumberString = /^[0-9]+$/;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateFormStepRegister = {
  validateStepOne: (data: UserData) => {
    const errors: string[] = [];
    const allowedRoleCodes = ['BD', 'CS', 'SEC'];
    if (!allowedRoleCodes.includes(data.role_code)) {
      errors.push('Phòng ban không hợp lệ');
    }
    const nameRegex = /^(?!.*undefined).{2,}$/;
    if (!nameRegex.test(data.fullname)) {
      errors.push('Tên không hợp lệ');
    }

    return errors;
  },
  validateStepTwo: (data: UserData) => {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Email chưa hợp lệ');
    }
    const phoneRegex = /^\d{10,12}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push('Số điện thoại phải 10-12 số');
    }

    return errors;
  },
  validateStepThree: (data: UserData) => {
    const errors: string[] = [];
    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (data.password.length < 8) {
      errors.push('Mật khẩu phải ít nhất 8 ký tự');
    }

    // Kiểm tra mật khẩu có ít nhất một ký tự in hoa
    if (!/[A-Z]/.test(data.password)) {
      errors.push('Mật khẩu phải chứa ít nhất một ký tự in hoa');
    }

    if (!/[a-z]/.test(data.password)) {
      errors.push('Mật khẩu phải chứa ít nhất một ký tự thường');
    }

    // Kiểm tra mật khẩu có ít nhất một ký tự đặc biệt
    if (!/[^a-zA-Z0-9]/.test(data.password)) {
      errors.push('Mật khẩu phải chứa ít nhất một ký tự đặc biệt');
    }

    // Kiểm tra mật khẩu và mật khẩu nhập lại
    if (data.password !== data.password2) {
      errors.push('Mật khẩu chưa khớp');
    }

    return errors;
  },
};

export function validateUserData(data: UserData): string[] {
  const errors: string[] = [];

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.push('Email chưa hợp lệ');
  }

  // Kiểm tra mật khẩu có ít nhất 8 ký tự
  if (data.password.length < 8) {
    errors.push('Mật khẩu phải ít nhất 8 ký tự');
  }

  // Kiểm tra mật khẩu có ít nhất một ký tự in hoa
  if (!/[A-Z]/.test(data.password)) {
    errors.push('Mật khẩu phải chứa ít nhất một ký tự in hoa');
  }

  if (!/[a-z]/.test(data.password)) {
    errors.push('Mật khẩu phải chứa ít nhất một ký tự thường');
  }

  // Kiểm tra mật khẩu có ít nhất một ký tự đặc biệt
  if (!/[^a-zA-Z0-9]/.test(data.password)) {
    errors.push('Mật khẩu phải chứa ít nhất một ký tự đặc biệt');
  }

  // Kiểm tra mật khẩu và mật khẩu nhập lại
  if (data.password !== data.password2) {
    errors.push('Mật khẩu chưa khớp');
  }

  // Kiểm tra định dạng số điện thoại (10 đến 12 chữ số)
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(data.phone)) {
    errors.push('Số điện thoại phải 10-12 số');
  }

  // Kiểm tra định dạng role code (chỉ chứa chữ và số)
  const allowedRoleCodes = ['BD', 'CS', 'SEC'];
  if (!allowedRoleCodes.includes(data.role_code)) {
    errors.push('Role không hợp lệ');
  }

  return errors;
}

export function isNotNullOrEmptyObject(data: UserData): string | boolean {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      if (data[key] === undefined || data[key] === null || data[key] === '') {
        return key;
      }
    }
  }
  return false;
}

export function validateDriver(data: driverData) {
  const errors: string[] = [];
  const nameRegex = /^(?!.*undefined).{2,}$/;
  if (!nameRegex.test(data.nameDriver)) {
    errors.push('Tên không hợp lệ');
  }
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(data.numberPhoneDriver)) {
    errors.push('Số điện thoại phải 10-12 số');
  }
  const isVietnamLicensePlate =
    /^([0-9]{2}(-)?[A-Z]{1,2}|[0-9]{2}[A-Z]{1,2}[0-9]{1,2}|[0-9]{2}-[A-Z]{1,2}[0-9]{1,2})(-)?[0-9]{3,6}(?:\.[0-9]+)?$/;
  if (!isVietnamLicensePlate.test(data.licenseDriver)) {
    errors.push('Bảng số xe không hợp lệ');
  }
  return errors;
}

export const isImageOrVideoUrl = (url: string) => {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
  const videoExtensions = /\.(mp4|avi|mkv|mov|wmv|flv)$/i;

  if (imageExtensions.test(url)) {
    return 'image';
  } else if (videoExtensions.test(url)) {
    return 'video';
  } else {
    return false;
  }
};

export function isValidJsonFilename(filename: string) {
  const regex = /^[a-zA-Z0-9-_]+\.json$/;
  return regex.test(filename);
}
