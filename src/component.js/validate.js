export const validate = (data, type )  => {
    const errors = {};

    //email validate
    if(!data.email) {
        errors.email = "email required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid"
    }else {
        delete errors.email
    }

    //password validate
    if(!data.password){
        errors.password = "Password is required"
    }else if (data.password.length < 6) {
        errors.password = "You must choose 6 or more character"
    }else {
        delete errors.password
    }
    
    // confirem password input
    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm the password"
    }else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password is not match"
    }else {
        delete errors.confirmPassword
    }

    if  ( type === "SignUp") {
         //name validate
            if(!data.name.trim()) {
                errors.name = "username required"
            }else {
                delete errors.name
            }
    
        //isAccepted validate 
        if(data.isAccepted){
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our regalations"
    }
    }

    return errors
}