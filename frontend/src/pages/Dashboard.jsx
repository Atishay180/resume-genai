import ProfileForm from "../components/features/ProfileForm";

const Dashboard = () => {
    return (
        <div className="container mx-auto border">
            <div className="min-h-screen bg-background px-4 py-4">
                <div className="mx-auto max-w-5xl">

                    {/* Header */}
                    <div className="mb-5 text-center">
                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Create Your Custom{" "}
                            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                                Interview Plan
                            </span>
                        </h1>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Let our AI analyze the job requirements and your profile
                            to build a personalized interview strategy.
                        </p>
                    </div>

                    <ProfileForm />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;