# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# データベース設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|e-mail|string|null: false, unique: true|
|pass|string|null: false, unique: true|
|name|string|null: false|
  ### Association
  - has_many :groups_users
  - has_many :groups, through: :groups_users
  - has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|null: false|
  ### Association
  - has_many :groups_users
  - has_many :users, through: :groups_users
  - has_many :message

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
  ### Association
  - belongs_to :group
  - belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false, foreign_key: true|
|image|text|null: false, foreign_key: true|
  ### Association
  - belongs_to :user
  - belongs_to :group
