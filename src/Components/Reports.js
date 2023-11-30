import React, { useState } from 'react';
import '../Styles/Report.css';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTable = () => {
    const filter = searchTerm.toUpperCase();
    const table = document.querySelector(".table-box");
    const rows = table.querySelectorAll(".table-row");
  
    let noDataFound = true;
  
    for (let i = 2; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll(".table-cell");
      let rowVisible = false;
  
      for (let j = 0; j < cells.length; j++) {
        const txtValue = cells[j].innerText || cells[j].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rowVisible = true;
          noDataFound = false;
          break;
        }
      }

      rows[i].style.display = rowVisible ? "" : "none";
    }
    const noDataMessage = document.getElementById("noDataMessage");
    noDataMessage.style.display = noDataFound ? "block" : "none";
  };

  return (
    <div className='tablecontainer' id="Table" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px', width:"100%" }}>
      <div className="Analysis">
        <p style={{ color:"rgb(44, 82, 85)"}}>Analysis </p>
      </div>
      <div className="table-box">
        <div className="table-row search-bar">
          <div className="table-cell" colSpan="3">
            <input
              type="text"
              id="searchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={searchTable}
              placeholder="Search for Albums & Songs 🎶"
            />
          </div>
        </div>

        <div className="table-row table-head">
          <div className="table-cell first-cell">
            <p>Singer</p>
          </div>
          <div className="table-cell">
            <p>Album</p>
          </div>
          <div className="table-cell">
            <p>Title</p>
          </div>
          <div className="table-cell">
            <p>Rating</p>
          </div>
          <div className="table-cell last-cell">
            <p>Duration</p>
          </div>
        </div>

        <div id="noDataMessage" style={{ display: 'none', textAlign: 'center', marginTop: '10px', color: 'red' }}>
          No data found
        </div>

        <div className="table-content">
          <div className="table-row">
            <div className="table-cell first-cell">
              <p>Arjit Singh</p>
            </div>
            <div className="table-cell">
              <p>Rocky Aur Rani Kii Prem Kahaani</p>
            </div>
            <div className="table-cell">
              <p>Tum Kya Mile</p>
            </div>
            <div className="table-cell">
              <p>4.5⭐</p>
            </div>
            <div className="table-cell last-cell">
              <p>4min.37sec</p>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arjit Singh</p>
            </div>
            <div className="table-cell">
                <p>Tiger 3</p>
            </div>
            <div className="table-cell">
                <p>Leke Prabhu Ka Naam</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
            <p>3min.35sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arijit Singh</p>
            </div>
            <div className="table-cell">
                <p>Zara Hatke Zara Bachke</p>
            </div>
            <div className="table-cell">
                <p>Phir Aur Kya Chahiye</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.26sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arijit Singh</p>
            </div>
            <div className="table-cell">
                <p>Rocky Aur Rani Kii Prem Kahaani</p>
            </div>
            <div className="table-cell">
                <p>What Jhumka ?</p>
            </div>
            <div className="table-cell">
                <p>3⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>3min.35sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arijit Singh</p>
            </div>
            <div className="table-cell">
                <p>Brahmastra</p>
            </div>
            <div className="table-cell">
                <p>Kesariya</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.28sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arijit Singh</p>
            </div>
            <div className="table-cell">
                <p>Love Aaj Kal</p>
            </div>
            <div className="table-cell">
                <p>Shayad</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.07sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Arijit Singh</p>
            </div>
            <div className="table-cell">
                <p>Humpty Sharma Ki Dulhania</p>
            </div>
            <div className="table-cell">
                <p>Samjhawan</p>
            </div>
            <div className="table-cell">
                <p>3.5⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.30sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Anurag Kulkarni</p>
            </div>
            <div className="table-cell">
                <p>Vinaro Bhagyamu Vishnu Katha</p>
            </div>
            <div className="table-cell">
                <p>Darshana</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.03sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Anurag Kulkarni</p>
            </div>
            <div className="table-cell">
                <p>RX 100</p>
            </div>
            <div className="table-cell">
                <p>Pillaa Raa</p>
            </div>
            <div className="table-cell">
                <p>3.5⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>3min.58sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Anurag Kulkarni</p>
            </div>
            <div className="table-cell">
                <p>Sita Ramam</p>
            </div>
            <div className="table-cell">
                <p>Kaanunna Kalyanam</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.15sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Anurag Kulkarni</p>
            </div>
            <div className="table-cell">
                <p>Love Story</p>
            </div>
            <div className="table-cell">
                <p>Nee Chitram Choosi</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.05sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Sid Sriram</p>
            </div>
            <div className="table-cell">
                <p>Kushi (Tamil)</p>
            </div>
            <div className="table-cell">
                <p>Aradhya</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.42sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Sid Sriram</p>
            </div>
            <div className="table-cell">
                <p>Pathu Thala</p>
            </div>
            <div className="table-cell">
                <p>Nee Singam Dhan</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.07sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Sid Sriram</p>
            </div>
            <div className="table-cell">
                <p>Bangarraju</p>
            </div>
            <div className="table-cell">
                <p>Naa Kosam</p>
            </div>
            <div className="table-cell">
                <p>3.9⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.30sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Sid Sriram</p>
            </div>
            <div className="table-cell">
                <p>Kadal</p>
            </div>
            <div className="table-cell">
                <p>Adiye</p>
            </div>
            <div className="table-cell">
                <p>3⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>5min.01sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Sid Sriram</p>
            </div>
            <div className="table-cell">
                <p>Urike Urike </p>
            </div>
            <div className="table-cell">
                <p>Urike Urike</p>
            </div>
            <div className="table-cell">
                <p>3⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.35sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>ShreyaGoshal</p>
            </div>
            <div className="table-cell">
                <p>Nuvvu Nenu Prema </p>
            </div>
            <div className="table-cell">
                <p>Preminche Premava</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.12sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>ShreyaGoshal</p>
            </div>
            <div className="table-cell">
                <p>Varsham</p>
            </div>
            <div className="table-cell">
                <p>Kopama Napina</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.3sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>ShreyaGoshal</p>
            </div>
            <div className="table-cell">
                <p>Anand</p>
            </div>
            <div className="table-cell">
                <p>Nuvvena</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.03sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>ShreyaGoshal</p>
            </div>
            <div className="table-cell">
                <p>3</p>
            </div>
            <div className="table-cell">
                <p>Nee Paata Madhuram</p>
            </div>
            <div className="table-cell">
                <p>3⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.23sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Chitra</p>
            </div>
            <div className="table-cell">
                <p>Kondaveeti Donga</p>
            </div>
            <div className="table-cell">
                <p>Subhalekha</p>
            </div>
            <div className="table-cell">
                <p>3⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.45sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Chitra</p>
            </div>
            <div className="table-cell">
                <p>Pournamy</p>
            </div>
            <div className="table-cell">
                <p>Muvvala Navakala</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.50sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Selena Gomez</p>
            </div>
            <div className="table-cell">
                <p>calm down</p>
            </div>
            <div className="table-cell">
                <p>calm down</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.57sec</p>
            </div>
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Selena Gomez</p>
            </div>
            <div className="table-cell">
                <p>who says</p>
            </div>
            <div className="table-cell">
                <p>who says</p>
            </div>
            <div className="table-cell">
                <p>4⭐</p>
            </div>
            <div className="table-cell last-cell">
                <p>4min.57sec</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;