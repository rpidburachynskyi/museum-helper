#ifndef NETWORKMANAGER_H
#define NETWORKMANAGER_H

#include <QtNetwork>

const QString HOST = "localhost";
const quint16 PORT = 3001;

class NetworkManager : public QObject
{
	Q_OBJECT

	Q_PROPERTY(float updateProgress READ updateProgress NOTIFY updateProgressChanged)
public:
	explicit NetworkManager(QObject *parent = nullptr);

	inline float updateProgress() const {
		return m_updateProgress;
	}

signals:
	void updateRequired();

	void updateProgressChanged();

	void downloadUpdateFinished();
	void installUpdateFinished();

public slots:
	void checkVersion();

	void downloadUpdate();

private slots:
	void onUpdateFinished();

private:
	float m_updateProgress;

	QNetworkAccessManager *m_manager;
};

#endif // NETWORKMANAGER_H
