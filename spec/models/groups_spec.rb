require 'rails_helper'

RSpec.describe Groups, type: :model do
  it "is valid with last_message" do
    last_message = create(:message)
    expect(last_message).to be_valid
  end

  it "isn't valid with last_message" do
    
  end
end
