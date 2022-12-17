import Link from "next/link";


function footer() {
  return (
    <>
    <section className="footer">
        <div className="news"><h1>NEWS & DEALS</h1></div>
  
        <form id="fcf-form-id" className="fcf-form-className" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdgbuWQ5BkOSshtPExikCZ5XQH7z4c-KDvZeF1o-xuoTLWfCg/formResponse" target="hidden" onsubmit="submitted=true">
                    
                    
          
          <div className="fcf-form-group">
              <label for="Email" className="fcf-label"></label>
              <div className="fcf-input-group">
                  <input type="email" id="Email" name="entry.1045781291" className="fcf-form-control" required/>
              </div>
          </div>
  
          
  
          <div className="fcf-form-group">
              <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Submit Email</button>
          </div>
  
  
      </form>
      










        <img src="/k.png" alt="" data-aos="flip-up"/>

        <div className="footer">
          <p>Made by <a href="www.KeezRyuusei.ca">KeezRyuusei.ca</a> 
            © 2023 KZ Web Design & Development, All Rights Reserved.</p>
        </div>
      </section>
    
    
    </>
  )
}

export default footer