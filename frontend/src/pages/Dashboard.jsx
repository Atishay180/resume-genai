import ProfileForm from "../components/features/ProfileForm";

const Dashboard = () => {
    return (
        <div className="container mx-auto border">
            <div className="min-h-screen bg-background px-4 py-4">
                <ProfileForm />
            </div>
        </div>
    );
};

export default Dashboard;