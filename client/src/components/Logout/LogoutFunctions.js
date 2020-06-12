/********************************************************************
**  This files has the functions used on the register view.        **
**  Functions and frontend are separated for a cleaner code base.  **
********************************************************************/


const handleLogout = () => {
    const logoutInfoText = document.getElementById('logout-info-text');
    localStorage.removeItem('listAppData');
};

export { handleLogout }