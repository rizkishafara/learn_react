import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card title="Title1" desc="Deskripsi1" />
        </div>
        <div className="sm:w-1/3">
          <Card title="Title2" desc="Deskripsi2" />
        </div>
        <div className="sm:w-1/3">
          <Card title="Title3" desc="Deskripsi3" />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card title="Title4" desc="Deskripsi4" />
        </div>
        <div className="sm:w-1/3">
          <Card title="Title5" desc="Deskripsi5" />
        </div>
        <div className="sm:w-1/3">
          <Card title="Title6" desc="Deskripsi6" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;
