import React from "react";

import list1 from "../img/structur/24МУЗ-о-11.pdf";
import list2 from "../img/structur/23РЛ-о-21.pdf";
import list3 from "../img/structur/23ИЗО-о-21.pdf";
import list4 from "../img/structur/22ИЗО-о-31.pdf";
import list5 from "../img/structur/21РЛ-о-41.pdf";

const doc1 = list1;
const doc2 = list2;
const doc3 = list3;
const doc4 = list4;
const doc5 = list5;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      <div>
        <h3>Группа 24МУЗ-о-11</h3>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>
      <div>
        <h3>Группа 23РЛ-о-21</h3>
        <embed type="application/pdf" src={`${doc2}`} />
      </div>
      <div>
        <h3>Группа 23ИЗО-о-21</h3>
        <embed type="application/pdf" src={`${doc3}`} />
      </div>
      <div>
        <h3>Группа 22ИЗО-о-31</h3>
        <embed type="application/pdf" src={`${doc4}`} />
      </div>
      <div>
        <h3>Группа 21РЛ-о-41</h3>
        <embed type="application/pdf" src={`${doc5}`} />
      </div>
    </div>
  );
}
