


function AdminLayout() {
    return ( 
        <div className="flex min-h-screen w-full">
        {/* admin sidebar */}
        <div className="flex flex-1 flex-co">
            {/* Admin header */}
            <main className="flex flex-1 bg-muted/40 p-4 md:p-6 >
                <Outlet/>
            </main>
        </div>
        </div>

    );
}

export default AdminLayout;