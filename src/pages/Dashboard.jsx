import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card title="Title1" desc="Deskripsi1" />
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card title="Title2" desc="Deskripsi2" />
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card title="Title3" desc="Deskripsi3" />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card title="Title4" desc="Deskripsi4" />
        </div>
        <div className="sm:w-2/3">
          <div className="mb-4">
            <Card title="Title5" desc="Deskripsi5" />
          </div>
          <div className="mb-4">
            <Card title="Title6" desc="Deskripsi6" />
          </div>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
