
import React from 'react';


export const ChatIcon = ({ isOpenChat }) => {

    return (

        <button
            className=" chat-button"
            aria-label={`${!isOpenChat ? 'open chat' : 'close chat'}`}
	>
          <span
            className={`${!isOpenChat ? 'chat-open' : 'chat-close'}`}
          >
            { !isOpenChat ?
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 60 60" /* style="enable-background:new 0 0 60 60;" */ xmlSpace="preserve">
<g>
	<path d="M42,15.5H5.93C2.66,15.5,0,18.16,0,21.429V42.57c0,3.27,2.66,5.93,5.93,5.93H12v10c0,0.413,0.254,0.784,0.64,0.933 C12.757,59.478,12.879,59.5,13,59.5c0.276,0,0.547-0.115,0.74-0.327L23.442,48.5H42c3.27,0,5.93-2.66,5.93-5.929V21.43 C47.93,18.16,45.27,15.5,42,15.5z"/>
  <path d="M54.072,0.57L19.93,0.5C16.66,0.5,14,3.16,14,6.43v6.122c0,0.266,0.105,0.52,0.293,0.708 c0.188,0.187,0.442,0.292,0.707,0.292c0,0,0.001,0,0.002,0L40.07,13.5c8.951,0,9.93,2.021,9.93,7.93v21.141 c0,0.091-0.01,0.181-0.014,0.271l1.274,1.401c0.193,0.212,0.463,0.327,0.74,0.327c0.121,0,0.243-0.022,0.361-0.067 C52.746,44.354,53,43.983,53,43.57v-10h1.07c3.27,0,5.93-2.66,5.93-5.929V6.5C60,3.23,57.34,0.57,54.072,0.57z"/>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  <g></g><g></g><g></g><g></g><g></g>
              </svg>
              : <svg /* width="24px" height="24px" */ viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg> }

</span>
</button>
      
    )
}
