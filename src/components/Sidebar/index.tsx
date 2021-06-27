import { ReactNode } from 'react';

import './styles.scss';

type SidebarProps = {
  children?: ReactNode;
}

export function Sidebar({children}: SidebarProps) {

  return(
    <div id="home" >
      <aside>
        <h1>Teste Aside</h1>
      </aside>
      <main>
        <div className="main-content" >
          {children}
        </div>
      </main>
    </div>
  );
}