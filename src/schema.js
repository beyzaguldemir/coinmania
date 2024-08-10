import * as yup from "yup"

const regex="^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*[@$!%*?&]).{5,}$"

export const schema=yup.object().shape({
    email:yup.string().email("Lütfen geçerli bir mail giriniz.").required("Zorunlu Alan"),
    age:yup.number("Lütfen bir sayı giriniz").max(100,"Yüz yaşından küçük olmalısınız.").min(18,"18 yaşından küçük olmamalısınız.").integer(),
    password:yup.string().min(5,"Şifre minumum 5 karakterden oluşmalı.").matches(regex,"Şifreniz yeterince güçlü değil.").required("Zorunlu Alan"),
    // * oneOf :elemanın değeri verilen değerlerden biriyle eşleşiyor mu kontrol eder.
    // * ref: Farklı bir inputun verisini çağırır.
    confirm_password:yup.string().oneOf([yup.ref("password")],"Şifre Eşleşmiyor").required("Zorunlu Alan")
    


})