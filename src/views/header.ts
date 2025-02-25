// import { html } from 'lit-html';

const items = [{ label: 'Index', path: './' }];

export const menuItems = items
  .map(
    (item) => `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `,
  )
  .join('');

export function createHeader(title: string) {
  const img = './assets/logo_alvaro_montoro.png';
  const cssClass = 'main-header';
  const headerTemplate = `
        <header class="${cssClass}">
                <img src=${img} width="50" alt="Logo" />
                <h1 id="header1" data-id="1" class="h2">
                    ${title}
                </h1>
        </header>
        <nav>
                <ul>        
                    </li>
                    <li class="menu-mobile">
                        <a href="#">
                            <span class="fa-solid fa-bars"></span>
                        </a>
                    </li>
                    ${menuItems}
                </ul>
        </nav>
    `;
  return headerTemplate;
}
