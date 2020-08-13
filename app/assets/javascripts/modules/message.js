$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `<div class="MessageField__message-list" data-message-id=${message.id}>
                    <div class="MessageField__message-list__log">
                      <div class="MessageField__message-list__log__member">
                        ${message.user_name}
                      </div>
                      <div class="MessageField__message-list__log__time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="MessageField__message-list__comment">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
                  return html;
    } 
    else {
      let html = `<div class="MessageField__message-list" data-message-id=${message.id}>
                    <div class="MessageField__message-list__log">
                      <div class="MessageField__message-list__log__member">
                        ${message.user_name}
                      </div>
                      <div class="MessageField__message-list__log__time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="MessageField__message-list__comment">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
                  return html;
    }
  }

  $('.main-chat__message-formid').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message)
      $('.MessageField').append(html)
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      $('.main-chat__message-formid')[0].reset();
      $('.main-chat__message-formid__input__send-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.main-chat__message-formid__input__send-btn').prop('disabled', false);
    })
  })
});