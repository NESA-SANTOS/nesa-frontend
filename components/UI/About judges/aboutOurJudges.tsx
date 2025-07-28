import React from "react";

const AboutOurJudges: React.FC = () => (
  <section className="max-w-4xl mx-auto my-12 bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-900">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primaryGold flex items-center gap-2">
      <span role="img" aria-label="star">🌟</span> About Our Judges – NESA-Africa 2025
    </h2>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Welcome to the Council of Excellence</h3>
    <p className="mb-6 text-base md:text-lg">
      At the heart of the NESA-Africa 2025 Awards lies an elite panel of 91 accomplished judges — thought leaders, educators, innovators, media professionals, NGO executives, CSR advocates, and public servants — collectively shaping the future of African education. These individuals are the gatekeepers of the continent’s most prestigious educational recognition system.
    </p>
    <p className="mb-6 text-base md:text-lg">
      Our judging model prioritizes transparency, multi-level evaluation, and excellence. Judges are assigned specific award categories and participate in rigorous nomination screening, verification, public voting oversight, and final selection of honorees.
    </p>
    <h3 className="text-2xl font-bold mb-4 mt-8">🎓 Benefits of Serving as a Judge</h3>
    <ul className="list-disc pl-6 mb-8 space-y-3">
      <li><span className="font-bold">🏅 1-Year Free Ambassador Status:</span> All approved judges receive an honorary NESA-Africa Ambassador Certificate and membership valued at $250, with only $50 administrative contribution.</li>
      <li><span className="font-bold">🌍 International Recognition:</span> Be profiled on the official website, receive digital badges, and attend exclusive NESA events.</li>
      <li><span className="font-bold">🤝 VIP Networking:</span> Connect with policymakers, philanthropists, innovators, and education advocates across Africa and the Diaspora.</li>
      <li><span className="font-bold">🎤 Thought Leadership:</span> Participate in webinars, panels, and content features during the EduAid Africa Expo and Award Week (Oct 13–17, 2025).</li>
    </ul>
    <h3 className="text-2xl font-bold mb-4 mt-8">🧑‍⚖️ Our Esteemed Judges (Select Profiles)</h3>
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-[#F7F7F7] rounded-lg p-4">
        <p className="font-bold text-primaryGold mb-1">🔹 Mr. Benneth Osarieme Ogbeiwi</p>
        <p className="text-sm font-semibold">Music & Arts Educator</p>
        <p className="text-gray-700 text-sm">With over two decades of excellence in arts education, Benneth is known for his commanding leadership and high-performance standards.</p>
      </div>
      <div className="bg-[#F7F7F7] rounded-lg p-4">
        <p className="font-bold text-primaryGold mb-1">🔹 Dr. Juliet Ihiabe</p>
        <p className="text-sm font-semibold">Public Health & Community Mobilization</p>
        <p className="text-gray-700 text-sm">Championing access to education through health interventions, especially for women and children in underserved areas.</p>
      </div>
      <div className="bg-[#F7F7F7] rounded-lg p-4">
        <p className="font-bold text-primaryGold mb-1">🔹 Damilola Omotosho</p>
        <p className="text-sm font-semibold">HSEQ Implementation & ESG Consultant – Asharami Synergy, Sahara Group</p>
        <p className="text-gray-700 text-sm">Sustainability advocate and Cambridge-certified professional influencing energy transition literacy and corporate ESG frameworks in Africa.</p>
      </div>
      <div className="bg-[#F7F7F7] rounded-lg p-4">
        <p className="font-bold text-primaryGold mb-1">🔹 Paul Kayode Joash</p>
        <p className="text-sm font-semibold">Transformation Coach & Media Strategist</p>
        <p className="text-gray-700 text-sm">A prolific speaker and founder of MyDoubleDouble, Paul bridges education with performance coaching and motivation across continents.</p>
      </div>
      <div className="bg-[#F7F7F7] rounded-lg p-4">
        <p className="font-bold text-primaryGold mb-1">🔹 Oluwadaisi Patricia Aderibigbe Santos</p>
        <p className="text-sm font-semibold">Veteran Educationalist</p>
        <p className="text-gray-700 text-sm">A trailblazer in women-led educational reform and a pillar of early childhood learning advocacy across Nigeria.</p>
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4 mt-8">💎 Judges Composition & Role Breakdown</h3>
    <table className="w-full text-left mb-8">
      <thead>
        <tr>
          <th className="py-2 pr-4 font-semibold">Category</th>
          <th className="py-2 pr-4 font-semibold">No. of Judges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 pr-4">Competitive (e.g. EduTech, CSR, Creative Arts)</td>
          <td className="py-2 pr-4">52</td>
        </tr>
        <tr>
          <td className="py-2 pr-4">Non-Competitive (e.g. Policy Support, Faith-Based, Bilateral Institutions)</td>
          <td className="py-2 pr-4">36</td>
        </tr>
        <tr>
          <td className="py-2 pr-4">Special Category: Africa Lifetime Education Icon</td>
          <td className="py-2 pr-4">3</td>
        </tr>
        <tr className="font-bold">
          <td className="py-2 pr-4">Total</td>
          <td className="py-2 pr-4">91</td>
        </tr>
      </tbody>
    </table>
    <h3 className="text-2xl font-bold mb-4 mt-8">📝 Join the Judging Council</h3>
    <p className="mb-2">We welcome professionals, CSR leads, education experts, and global partners to apply or nominate judges.</p>
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
      <a href="mailto:judges@nesa.africa" className="bg-primaryGold text-black px-6 py-2 rounded font-semibold shadow hover:bg-yellow-400 transition">Apply to Judge</a>
      <a href="mailto:judges@nesa.africa" className="bg-white border border-primaryGold text-primaryGold px-6 py-2 rounded font-semibold shadow hover:bg-yellow-50 transition">Nominate a Judge</a>
    </div>
    <div className="text-sm text-gray-600 mb-2">Application Deadline: <span className="font-semibold text-black">August 25, 2025</span></div>
    <div className="text-sm text-gray-600 mb-2">Visit: <a href="https://www.nesa.africa" className="text-primaryGold underline">www.nesa.africa</a></div>
    <div className="text-sm text-gray-600">Contact: <a href="mailto:nesa.africa@gmail.com" className="text-primaryGold underline">nesa.africa@gmail.com</a></div>
  </section>
);

export default AboutOurJudges;
