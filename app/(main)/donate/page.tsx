import Donationheader from "@/components/UI/DonationModal/donateheader";
import WhyDonationMatters from "@/components/UI/DonationModal/whydonate";

const DonationPage = () => {
  
  return (
    <>
    <Donationheader />
    <section className="mt-20 text-center max-w-3xl mx-auto">
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-bold mb-4">Donate to NESA-Africa 2025</h3>
        <p className="text-lg mb-6">
          <span className="font-semibold">Fuel Africa’s Education Transformation Movement</span>
          <br />
          Every contribution you make supports scholarships, school projects, media campaigns, and awards that recognize the heroes of education across Africa. NESA-Africa 2025 is more than an event—it’s a call to action for equity, excellence, and empowerment in education.
        </p>
        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-center">Why Donate?</h4>
          <ul className="list-decimal list-inside space-y-3">
        <li>
          <b>Empower Future Leaders:</b> Your donation provides visibility, recognition, and funding to teachers, innovators, and changemakers driving educational impact in Africa.
        </li>
        <li>
          <b>Support Scholarships & CSR Projects:</b> NESA-Africa partners with EduAid-Africa to deliver scholarships, renovate schools, and train educators in underserved communities.
        </li>
        <li>
          <b>Amplify Education Advocacy:</b> We broadcast across the continent through NESA TV and “It’s In Me Radio” to tell the stories of Africa’s education champions. Your donation fuels our media platforms.
        </li>
        <li>
          <b>Sponsor Youth Participation & Events:</b> Your giving enables free access for students and young educators to attend our expos, panels, and workshops during the NESA-Africa Week.
        </li>
        <li>
          <b>Be Recognized as a Change Agent:</b> Donors receive social media spotlights, digital badges, and VIP recognition at the NESA Gala Awards. Institutional donors are featured on our donor wall.
        </li>
          </ul>
        </div>
        <div className="text-left bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-center">Ways to Give</h4>
          <p className="mb-3">
        You can donate in <b>any currency</b>. All funds are processed through the <b>GFA Wallet</b> and automatically converted to <b>Afri-Gold Coins (AGC)</b>.
          </p>
          <table className="w-full text-sm mb-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3 border-b">Payment Method</th>
            <th className="py-2 px-3 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 border-b">Paystack</td>
            <td className="py-2 px-3 border-b">Cards/Bank Transfers – Global</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b">Fairsure</td>
            <td className="py-2 px-3 border-b">Smart Contracts & API Gateway</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b">Bancable</td>
            <td className="py-2 px-3 border-b">Digital Banking – Institutional</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b">Zelle / TapTap Send</td>
            <td className="py-2 px-3 border-b">Diaspora Transfers in USD, GBP, EUR</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b">Direct Wallet Transfer</td>
            <td className="py-2 px-3 border-b">To your NESA/GFA wallet address</td>
          </tr>
        </tbody>
          </table>
          <p className="mb-2">
        <b>Conversion Rate:</b> 1 USD = 10 AGC (Afri-Gold Coin)
        <br />
        GFA uses a pegged rate of <b>₦1,800/USD</b> – GFA retains the difference for project reinvestment and platform sustainability.
          </p>
        </div>
        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-center">Your Donation Comes with Bonuses</h4>
          <ul className="list-disc list-inside space-y-2">
        <li>Earn Afri-Gold Coin (AGC) in your GFA Wallet</li>
        <li>Use AGC to vote during NESA Awards</li>
        <li>Redeem discounts on NESA merchandise</li>
        <li>Get discounted or free access to NESA Events</li>
        <li>Receive updates on how your funds are used</li>
          </ul>
        </div>
        <div className="text-left bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-center">Donate Categories</h4>
          <ul className="list-disc list-inside space-y-2">
        <li>One-time or recurring personal gift</li>
        <li>Donate on behalf of a loved one</li>
        <li>Institutional/Corporate donation</li>
        <li>Educational CSR partnership</li>
        <li>Faith-based or diaspora group giving</li>
          </ul>
        </div>
        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-center">Partner With Us</h4>
          <p className="mb-2">
        Want to create a <b>custom donation campaign</b>, sponsor a scholarship, or support a local NESA Chapter?
          </p>
          <p className="mb-2">
        <b>Email:</b> <a href="mailto:donate@nesa.africa" className="text-blue-600 underline">donate@nesa.africa</a>
          </p>
        </div>
        <a
          href="https://nesa.africa/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition"
        >
          Donate Now
        </a>
        <p className="mt-6 text-gray-700">
          All donations are tracked in your GFA Wallet for transparency.
        </p>
        <p className="mt-4 font-semibold text-green-700">
          Together, let’s raise Africa’s education heroes.
        </p>
      </section>
    <WhyDonationMatters />
    </>  
    );
};

export default DonationPage;
