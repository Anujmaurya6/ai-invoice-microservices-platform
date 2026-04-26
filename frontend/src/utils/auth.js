export const loggedin=()=>{
    return !!localStorage.getItem("Token");
};

export const logout=()=>{
    localStorage.removeitem("Token");
    window.location.href="/login";
};