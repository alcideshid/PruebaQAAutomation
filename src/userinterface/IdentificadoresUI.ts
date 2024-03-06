export enum IdentificadoresUI {
        
    //Registro
    MODAL = "//div[@class='modal__content']",
    X = "(//button[.='×'])[1]",
    SING_UP = "//span[.='Sign up']",
    TITULO_SU = "//h2[.='Sign up']",
    EMAIL = "//input[@id='core__protected_modules_user_yiiForm_RegistrationForm_email']",
    TERMS = "//label[@for='core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions']",
    NO_BONUS = "//label[@for='bonus-0']",
    PASSWORD = "//input[@id='core__protected_modules_user_yiiForm_RegistrationForm_password']",
    CONF_PASSWORD = "//input[@id='core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation']",
    SUBMIT = "//button[@type='submit']",
    CONGRATULATIONS = "//h1[.=' Congratulations! ']",

    //Login y logout
    SIGN_IN = "//div[@class='login']//div[1]",
    SIGN_IN2 = "//a[contains(@class,'header-button header-button--login')]",
    TITULO_SIGN_IN = "//h2[.='Sign in']",
    AVATAR_ID = "//span[@class='user-avatar__title']",
    AVATAR_ICONO = "//div[@class='user-avatar']",
    BOTON_GOPROFILE = "//a[@data-test='nav-reg-head']",
    TITULO_PERFIL = "//h1[.='My profile']",
    USUARIO_L = "//input[@id='UserLogin_username']",
    PASSWORD_L = "//input[@id='UserLogin_password']",
    BOTON_SIGN_IN = "//button[@type='submit']",
    ICONO_LOGOUT = "//a[@class='profile__logout']//i[@class='icon-logout']"

}