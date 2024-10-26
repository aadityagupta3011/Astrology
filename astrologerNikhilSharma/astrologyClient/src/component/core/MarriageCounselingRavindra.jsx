import React from 'react';

const MarriageCounseling = () => {
  return (
    <div className="bg-gray-900 text-white p-6 sm:p-12"style={{
      backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/395/492/desktop-wallpaper-plain-backgrounds-full-best-plain-thumbnail.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: Late or Delayed Marriage Counseling */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Late or Delayed Marriage Counseling</h2>
          <p className="text-lg text-gray-300 mb-4">
            The late or delayed marriage counseling is provided to quicken one's marriage without any more delay or postponement. Increasing the possibilities of second marriage or enhancing the conditions favorable to this, are also quite possible. Actually, these problems occur due to some grave imperfections or doshas present in the birth chart of the person concerned.
          </p>
          <h3 className="text-xl text-yellow-400 font-semibold mb-2">
            Some most common astrological causes leading to such problems are the following:
          </h3>
          <ul className="list-none space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">➜</span> Low status of the Seventh house, and that of the Lord of Seventh house in the birth chart of the person concerned.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">➜</span> Poor status of planets Venus and Jupiter, and other naturally benefic planets in the natal chart.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">➜</span> Mean status of other relevant houses, such as eighth, fifth, second, tenth, eleventh, etc.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">➜</span> Presence of any doshas like the Mangal Dosha, or any pertinent Kaal Sarpa Dosha.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">➜</span> Ill locations, nature, and effects of one or more malefic planets.
            </li>
          </ul>
        </section>
        
        {/* Section 2: Marriage Life Problems Counseling */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Marriage Life Problems Counseling</h2>
          <p className="text-lg text-gray-300 mb-4">
            The expert marriage life problems counseling is also provided after comprehensive, critical, and discerning examination and analysis of one or both the partners of married life. All most relevant houses of every natal chart, locations and effects of various planets, and astrological imperfections and doshas are analyzed.
          </p>
          <h3 className="text-xl text-yellow-400 font-semibold mb-2">
            The following problems of the married life are curable forever:
          </h3>
          <ul className="list-none space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✔</span> Gradually decreasing love and respect for the other partner of married life.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✔</span> Regular clashes or quarrels between husband and wife.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✔</span> Some deep-seated misconception about the other partner.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✔</span> Some personal, familial, occupational, or social causes affecting the domestic life.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✔</span> Constantly growing chances of unwanted separation or divorce.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MarriageCounseling;
