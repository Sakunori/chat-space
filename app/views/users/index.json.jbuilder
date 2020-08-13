json.array! @users do |user|
  json.name  user.name
  json.id  user.id
  # ison.email  user.email
  # json.pw  user.encrypted_password
end