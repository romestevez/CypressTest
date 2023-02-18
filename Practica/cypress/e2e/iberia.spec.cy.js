describe('Entry to web and complete formulary',{
  retries: {
    runMode: 3,
    openMode: 3,
  }
}, () => {
  let cities = ['Madrid', 'Roma', 'Paris', 'Londres']
  let cities2 = ['Barcelona', 'Napoles', 'Ginebra', 'Amsterdam']

  const randomNumber = () => {
    return Math.floor(Math.random() * 4);
  }

  const randomTraveler = (x) => {
    const number = Math.floor(Math.random() * 2)
    let i = 0;
    while(i < 2) {
      if (number != i) {
        cy.get(`${x}`).click()  
        i++
      } else {
        break
      }
    };
  }

  it('Travel', () => {
    cy.visit('https://www.google.es')
    cy.get('#L2AGLb > div').click()

    // Access to webside
    cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('iberia {enter}')
    cy.get('#rso > div.hlcw0c > div > div > div > table > tbody > tr.mslg.dmenKe > td > div > h3 > a').click()
    cy.wait(2000)

    // Policy accepts
    cy.get('#onetrust-accept-btn-handler').click()

    // Select cities for travel
    cy.get('#tab-1 > form > fieldset > div > div > div > div:nth-child(1) > div:nth-child(1) > div > label').trigger('click').type(`${cities[randomNumber()]}`)
    cy.wait(1000)
    cy.get('#tab-1 > form > fieldset > div > div > div > div:nth-child(1) > div:nth-child(2) > div > label').click().type(`${cities2[randomNumber()]}`)

    // Select dates
    cy.get('a.ui-datepicker-next.ui-corner-all').click({ multiple: true })
    cy.get('a.ui-state-default').contains(1).click({ multiple: true })
    cy.get('#flight_round_date1').invoke('val').then((value) => {
      value = value.split('/')
      value[0] = 7 
      for (let i = 0; i < 3; i++) {
        cy.get('#flight_return_date1').click().type(value[i]);
      }
    })

    // Select number of travelers
    cy.get('#flight_passengers_1').click()
      const number =  Math.floor(Math.random() * 3) + 1
      let i = 1;
      while(i < 4) {
        if (number != i) {
          cy.get('#people-counter-1 > ul > li:nth-child(2) > div.ibe-people-counter__buttons > button.ibe-people-counter__buttons-more.fc-people-counter-active').click()  
          i++
        } else {
          break
        }
      };
      // Select childrens
      randomTraveler('#people-counter-1 > ul > li.ibe-people-counter__list-item.fc-people-counter-children.ibe-people-counter__item-minus > div.ibe-people-counter__buttons > button.ibe-people-counter__buttons-more.fc-people-counter-active')
      // Select babies
      randomTraveler('#people-counter-1 > ul > li.ibe-people-counter__list-item.fc-people-counter-babies.ibe-people-counter__item-minus > div.ibe-people-counter__buttons > button.ibe-people-counter__buttons-more.fc-people-counter-active')

      cy.wait(1000)
      cy.get('#flight_passengers_1').click()

      // Select billing
      cy.get('#tarifa1-button').click()
      cy.get('#tarifa1-menu')
        .find('li')
        .then(($lis) => {
          const numItems = $lis.length;
          cy.get(`#tarifa1-menu > li:nth-child(${Math.floor(Math.random() * numItems) + 1})`).click()
        });
      
      // check checkbox
      cy.get('#tab-1 > form > fieldset > div > div > div > div:nth-child(6) > div > div > div:nth-child(1) > div:nth-child(1) > div.ibe-form__checkbox.ibe-form__group--m-mobile.ibe-form__checkbox--vrt-p.inte-avioscheck > label').click()

  })
})